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

        return response('session destroy succsess');
    }

    public function index() {
        $userDb = User::where('id', 1)->first();
        Auth::login($userDb);

        $user = Auth::user();

        return $user;
    }

    public function token()
    {
        $userDb = User::where('id', 1)->first();

        return $userDb->remember_token;
    }
}
