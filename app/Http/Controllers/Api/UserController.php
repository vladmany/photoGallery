<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function deadSession(Request $request)
    {
        session_destroy();

        return response('session destroy succsess');
    }

    private function index() {
        $user = Auth::user();

        return $user;
    }
}
