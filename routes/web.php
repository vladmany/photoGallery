<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/','/photos');

Route::get('/auth/redirect', 'Auth\LoginController@redirect')->name('auth');
Route::get('/auth/callback', 'Auth\LoginController@callback');
Route::get('/auth/logout', 'Auth\LoginController@logout')->middleware('auth');

if(env('IS_LOCAL') !== '1') {
    Route::view('/{any}', 'spa')->where('any', '.*')->middleware('auth');  #
} else {
    Route::view('/{any}', 'spa')->where('any', '.*');  #->middleware('auth')
}
