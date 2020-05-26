<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\AlbumRequest;
use App\Models\Dashboard\Album;
use App\Models\Dashboard\AlbumPhoto;
use App\Models\Dashboard\Photo;
use App\Services\PhotoService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AlbumController extends Controller
{

    public function __construct(PhotoService $photoService)
    {
//        $this->photoService = $photoService;
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $user_id = Auth::id();
        return Album::with(['photos' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }])
            ->where('user_id', $user_id)
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
        $userId = Auth::id();
        $albumCount = (string)(Album::all()->count()+1);
        $url = 'http://gallery/album/'.base64_encode($albumCount);
        $data = $request->all();
        $data['url'] = $url;
        $data['user_id'] = $userId;
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
        $data = $request->only(['idPhoto', 'idAlbum']);

        $photoId = $data['idPhoto'];
        $photo = Photo::where('id', $photoId)->get()->first();

        $albumId = $data['idAlbum'];
        $album = Album::where('id', $albumId)->get()->first();

        $album->cover = $photo->url;

        $album->save();
    }
    /*public function changeCoverForcibly(Request $request)
    {
        $data = $request->only(['idAlbum', 'idPhoto']);

        $albumId = $data['idAlbum'];
        $album = Album::where('id', $albumId)->get()->first();

        $countAlbumPhotos=AlbumPhoto::where('album_id',$album->id)->count();
        if($countAlbumPhotos == 0){
            $album->cover = '/storage/albums/placeholderAlbum.png';
        }
        else {
            $photoId = $data['idPhoto'];
            $photo = Photo::where('id', $photoId->id)->get()->first();

            if($album->cover == $photo->url){

            }

            $photoAlbumId = AlbumPhoto::where('album_id', $album->id)->get()->first();

            $photo = Photo::where('id', $photoAlbumId->photo_id)->get()->first();

            $album->cover = $photo->url;
        }




        if($album->cover == )



        $album->save();
    }*/
}
