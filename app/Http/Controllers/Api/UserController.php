<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{
    public function deadSession(Request $request)
    {
//        Auth::logout();
//        session_destroy();

//        return response('session destroy succsess');

//        $cookie = Cookie::forget('laravel_session');

//        $this->guard()->logout();
        Auth::logout();
    }

    public function index() {
        $user_id = Auth::id();

        $userDb = User::where('id', $user_id)->first();

        return $userDb;
    }

    public function token()
    {
        $userDb = User::where('id', 1)->first();

        return $userDb->remember_token;
    }
}
