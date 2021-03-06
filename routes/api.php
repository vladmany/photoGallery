<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('token', 'Api\UserController@token');

Route::apiResource('all-photos', 'Api\PhotoController');
Route::apiResource('all-albums', 'Api\AlbumController');
Route::apiResource('/corrects', 'Api\CorrectController');
Route::post('/dead-session', 'Api\UserController@deadSession');
Route::get('/get-user', 'Api\UserController@index');
Route::apiResource('/albums-photos', 'Api\AlbumPhotoController');
Route::post('/album-photos/delete','Api\AlbumPhotoController@deletePhotos');
Route::post('/album-photos/download-albums','Api\AlbumPhotoController@downloadAlbums');
//        Route::get('/photos', 'PhotoController@photoIndex')->name('photos');
Route::post('/photos/upload', 'Api\PhotoController@store')->name('photos.upload');
Route::post('/photos/add-to-album', 'Api\PhotoController@addToAlbum')->name('photos.addToAlbum');
Route::post('/photos/download','Api\PhotoController@download')->name('photos.download');
Route::post('/photos/delete','Api\PhotoController@deletePhotos')->name('photos.delete');
Route::post('/photos/change-date','Api\PhotoController@changeDate')->name('photos.change-date');
Route::post('/albums/create', 'Api\AlbumController@store')->name('albums.create');
Route::post('/albums/index', 'Api\AlbumController@index')->name('albums.index');
Route::get('/collages', 'Api\PhotoController@collageIndex')->name('collages');
Route::get('/animatoins', 'Api\PhotoController@animationIndex')->name('animations');
Route::post('/album-destr', 'Api\AlbumController@myDestroy')->name('album-destr');
Route::post('/albums/update', 'Api\AlbumController@myUpdate')->name('albums.my-update');
Route::post('/albums/change-cover', 'Api\AlbumController@changeCover')->name('albums.change-cover');
Route::post('/photo/turn', 'Api\CorrectController@saveRotate')->name('photo.turn');
