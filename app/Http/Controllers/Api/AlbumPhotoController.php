<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\AlbumPhotoStore;
use App\Models\Dashboard\Album;
use App\Models\Dashboard\AlbumPhoto;
use App\Models\Dashboard\Photo;
use Illuminate\Http\Request;
use ZipArchive;

class AlbumPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $objects = AlbumPhoto::with('albums')
            ->with(['photos' => function ($query) {
                    $query->orderBy('created_at', 'desc');
                }])
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
        $successPhotos = [];

        $coverId = -1;
        foreach($photos as $photoId) {
            $dbPhoto = AlbumPhoto::where('album_id', $albumId)
                ->where('photo_id', $photoId)
                ->get();

            if(count($dbPhoto) == 0) {
                $coverId = $photoId;
                AlbumPhoto::create([
                    'album_id' => $albumId,
                    'photo_id' => $photoId,
                ]);
                array_push($successPhotos,$photoId);
            }
        }

        $photo = Photo::where('id', $coverId)->first();
        if($photo) {
            $album = Album::where('id', $albumId)->first();
            $album->cover = $photo->url;
            $album->save();
        }

        return response()->json($successPhotos);
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

    public function deletePhotos(Request $request)
    {

        $data = $request->only(['photos', 'albumId']);

        $photos = $data['photos'];
        $albumId = $data['albumId'];
        if ((count($photos) > 0) and $albumId)
        {
            foreach ($photos as $photoId)
            {
                $AlbumPhotoBd = AlbumPhoto::all()->where('photo_id', $photoId)->where('album_id', $albumId)->first();

                if ($AlbumPhotoBd)
                {
                    $AlbumPhotoBd->delete();
                }
            }
            $countAlbumPhotos=AlbumPhoto::where('album_id',$albumId)->count();
            if($countAlbumPhotos == 0){
                $album = Album::where('id', $albumId)->get()->first();
                $album->cover = '/storage/albums/placeholderAlbum.png';
            }
        }
    }

    public function downloadAlbums(Request $request)
    {
        $data = $request->only(['albums']);

        $albums = $data['albums'];


        if (count($albums) > 0)
        {
            $zip = new ZipArchive;

            $fileName = 'myNewFile.zip';

            if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE)
            {
                foreach ($albums as $albumId)
                {
                    $albumPhotoBd = AlbumPhoto::all()->where('album_id', $albumId);
                    $albumName = Album::all()->where('id', $albumId)->first()->name;
                    foreach ($albumPhotoBd as $albumPhoto)
                    {
                        $photo = Photo::all()->where('id', $albumPhoto->photo_id)->first();
                        if ($photo)
                        {
                            $photoPath = storage_path("app/public/{$photo->path}");
                            $zip->addEmptyDir($albumName);
                            $relativeNameInZipFile = $albumName .'/'. basename($photoPath); #
                            $zip->addFile($photoPath, $relativeNameInZipFile);
                        }
                    }
                }

                $zip->close();
            }
            return response()->download(public_path($fileName))->deleteFileAfterSend(true);
        }
    }
}
