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

Route::get('/auth/firstredirect', 'Auth\LoginController@redirect')->name('auth.redirect');
Route::post('/auth/redirect', 'Auth\LoginController@callback')->name('auth.callback');

Route::view('/{any}','spa')->where('any', '.*'); # ->middleware('auth')
