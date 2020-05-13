<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\AlbumPhotoStore;
use App\Models\Dashboard\AlbumPhoto;
use Illuminate\Http\Request;

class AlbumPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $objects = AlbumPhoto::with('albums')
            ->with('photos')
            ->get();

        return $objects;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(AlbumPhotoStore $request)
    {
        $data = $request->only(['photos', 'album']);
        $photos = $data['photos'];
        $albumId = $data['album'];
        foreach($photos as $photoId) {
            $dbPhoto = AlbumPhoto::where('album_id', $albumId)
                ->where('photo_id', $photoId)
                ->get();

            if(count($dbPhoto) == 0) {
                AlbumPhoto::create([
                    'album_id' => $albumId,
                    'photo_id' => $photoId,
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashboard\AlbumPhoto  $albumPhoto
     * @return \Illuminate\Http\Response
     */
    public function show(AlbumPhoto $albumPhoto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dashboard\AlbumPhoto  $albumPhoto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AlbumPhoto $albumPhoto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashboard\AlbumPhoto  $albumPhoto
     * @return \Illuminate\Http\Response
     */
    public function destroy(AlbumPhoto $albumPhoto)
    {
        //
    }
}
