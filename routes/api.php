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

Route::apiResource('all-photos', 'Api\PhotoController');
Route::apiResource('all-albums', 'Api\AlbumController');

Route::apiResource('/albums-photos', 'Api\AlbumPhotoController');
//        Route::get('/photos', 'PhotoController@photoIndex')->name('photos');
Route::post('/photos/upload', 'Api\PhotoController@store')->name('photos.upload');
Route::post('/photos/add-to-album', 'Api\PhotoController@addToAlbum')->name('photos.addToAlbum');
Route::post('/photos/download','Api\PhotoController@download')->name('photos.download');
Route::post('/albums/create', 'Api\AlbumController@store')->name('albums.create');
Route::post('/albums/index', 'Api\AlbumController@index')->name('albums.index');
Route::get('/collages', 'Api\PhotoController@collageIndex')->name('collages');
Route::get('/animatoins', 'Api\PhotoController@animationIndex')->name('animations');
Route::post('/album-destr', 'Api\AlbumController@myDestroy')->name('album-destr');
Route::post('/albums/update', 'Api\AlbumController@myUpdate')->name('albums.my-update');
