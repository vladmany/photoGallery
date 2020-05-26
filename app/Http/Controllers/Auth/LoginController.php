<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function redirect()
    {
        $query = http_build_query([
            'client_id' => 17,
            'redirect_uri' => 'https://it20-tools-photogallery.azurewebsites.net/auth/callback',
            'response_type' => 'code',
            'scope' => '',
        ]);

        return redirect('https://team1-group-project.azurewebsites.net/oauth/authorize?'.$query);
    }

    public function callback(Request $request)
    {
        $http = new Client();

        $response = $http->post('http://team1-group-project.azurewebsites.net/oauth/token', [
            'form_params' => [
                'grant_type' => 'authorization_code',
                'client_id' => 17, //данные которые выдаст Богдан. вынести в конфиг
                'client_secret' => 'DJWhEfPbsKMLlEBZDeyGgoCqc4RWmnJvDne4g7Pt', //данные которые выдаст Богдан. вынести в конфиг
                'redirect_uri' => 'https://it20-tools-photogallery.azurewebsites.net/auth/callback',
                'code' => $request->code,
            ],
        ]);

        $access = json_decode((string)$response->getBody());//данные с токеном. придет сам токен и время его жизни

        if (isset($access->access_token) && $access->access_token) {
            // you would like to store the access_token in the session though...
            $access_token = $access->access_token;

            // получение данных пользователя
            $ch = curl_init();
            $url = 'http://team1-group-project.azurewebsites.net/api/user';
            $header = array(
                'Authorization: Bearer ' . $access_token
            );

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            $result = curl_exec($ch);
            curl_close($ch);

            $response = json_decode($result, true);//данные о user пришедшие от Богдана

//            dd($response);

            $myuser = User::query()->where('email', $response['email'])->first();

//нужно сохранить пользователя на вашем преокте, если уже есть пользователь с таким email тогда обновить токен
            if(!$myuser)
            {
                $user = User::Create([
                        'email' => $response['email'],
                        'name' => $response['name'],
                        'surname' => $response['surname'],
                        'avatar_url' => $response['avatar_url'],
                        'password' => Hash::make('qwer1234'),
                        'remember_token' => $access->access_token
                    ]
                );
//                dd($response, $user);
                Auth::login($user);
                return response()->redirectTo(RouteServiceProvider::HOME);
            }


//авторизовать пользователя
            $myuser->update([
                'remember_token' => $access->access_token,
                'name' => $response['name'],
                'surname' => $response['surname'],
                'avatar_url' => $response['avatar_url']
            ]);
            Auth::login($myuser);

//            dd($response ,$myuser);

//перекинуть в личны кабинет
            return response()->redirectTo(RouteServiceProvider::HOME);
        }
    }

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function logout(Request $request)
    {
//        if(Auth::user()->token())
//            Auth::user()->token()->revoke();
//        Auth::logout();

//        $request->session()->flush();

        $cookie = Cookie::forget('laravel_session');

        dd($cookie);

        $this->guard()->logout();
        Auth::logout();

        return redirect('https://it20-tools-photogallery.azurewebsites.net/authorization') ;

//
//        return redirect()->route('auth');
    }

}
