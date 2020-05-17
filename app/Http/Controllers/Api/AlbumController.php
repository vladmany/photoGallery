<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\AlbumRequest;
use App\Models\Dashboard\Album;
use App\Models\Dashboard\AlbumPhoto;
use App\Models\Dashboard\Photo;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return Album::with(['photos' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }])
            ->orderBy('created_at', 'desc')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AlbumRequest $request)
    {
        $albumCount = (string)(Album::all()->count()+1);
        $url = 'http://gallery/album/'.base64_encode($albumCount);
        $data = $request->all();
        $data['url'] = $url;

        $data = Album::create($data);

        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashboard\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dashboard\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(AlbumRequest $request)
    {
        //dd($request->all());
//        $data = $request->only(['id', 'name']);
//        $albumName = $data['name'];
//        $albumId = $data['id'];
//        $album = Album::where('id', $albumId)->get()->first();
//        $album->name = $albumName;
//        $album->save();
        /*$album = Album::findOrFail($id);
        $album->update($request->all());

        return album;*/
        //dd($request->all());
        /*$this->validate($request, [
            'name' => 'required',
        ]);

        $user = Album::findOrFail($id);

        $user->update($request->all());*/

    }
    public function myUpdate(AlbumRequest $request)
    {
        //dd($request->all());
        $data = $request->only(['id', 'name']);
        $albumName = $data['name'];
        $albumId = $data['id'];
        $album = Album::where('id', $albumId)->get()->first();
        $album->name = $albumName;
        $album->save();
        /*$album = Album::findOrFail($id);
        $album->update($request->all());

        return album; */
        //dd($request->all());
        /*$this->validate($request, [
            'name' => 'required',
        ]);

        $user = Album::findOrFail($id);

        $user->update($request->all());*/

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashboard\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy(Album $album)
    {
        //
    }
    public function myDestroy(Request $request)
    {
        $data = $request->only(['id']);

        $albumId = $data['id'];

        Album::destroy($albumId);
    }
    public function changeCover(Request $request)
    {
        $data = $request->only(['idPhotoAlbum', 'idAlbum']);

        $photoIdAlbum = $data['idPhotoAlbum'];
        $photoAlbum = AlbumPhoto::where('id', $photoIdAlbum)->get()->first();

        $albumId = $data['idAlbum'];
        $album = Album::where('id', $albumId)->get()->first();

        $photoId = $photoAlbum->photo_id;
        $photo = Photo::where('id', $photoId)->get()->first();

        $album->cover = $photo->url;

        $album->save();
    }
}
