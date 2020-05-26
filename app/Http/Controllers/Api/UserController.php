<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function deadSession(Request $request)
    {
        session_destroy();
        Auth::logout();

//        return response('session destroy succsess');
    }

    public function index() {
        $user_id = Auth::id();
        $userDb = User::where('id', $user_id)->first();

//        dd($userDb);
//        Auth::login($userDb);

//        $user = Auth::user();

        return $userDb;
    }

    public function token()
    {
        $userDb = User::where('id', 1)->first();

        return $userDb->remember_token;
    }
}
