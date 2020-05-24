<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\PhotoRequest;
use App\Models\Dashboard\Album;
use App\Models\Dashboard\AlbumPhoto;
use App\Models\Dashboard\Photo;
use App\Services\PhotoService;
use App\User;
use Carbon\Carbon;
use Composer\Util\Zip;
use FilesystemIterator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use ZipArchive;

class PhotoController extends Controller
{
    public $photoService;

    public function __construct(PhotoService $photoService)
    {
        $this->photoService = $photoService;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
//        dd(Photo::all());
        return Photo::with('albums')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PhotoRequest $request)
    {
        $this->photoService->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param Photo $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Photo $photo
     * @return \Illuminate\Http\Response
     */
    public function update(PhotoRequest $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Photo $photo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo $photo)
    {
        //
    }

    public function photoIndex()
    {
        $photos = Photo::where('kind_id', 1)
                    ->with('roles')
                    ->orderBy('created_at', 'desc')
                    ->get();

        return $photos;
    }

    public function collageIndex()
    {
        $collages = Photo::where('kind_id', 2)
            ->with('roles')
            ->orderBy('created_at', 'desc')
            ->get();

        return $collages;
    }

    public function animationIndex()
    {
        $animations = Photo::where('kind_id', 3)
            ->with('roles')
            ->orderBy('created_at', 'desc')
            ->get();

        return $animations;
    }

    public function download(Request $request)
    {
        $data = $request->only(['photos']);

        $photos = $data['photos'];


        if (count($photos) > 1)
        {
            $zip = new ZipArchive;

            $fileName = 'myNewFile.zip';

            if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE)
            {
                foreach ($photos as $photoId)
                {
                    $photoBd = Photo::all()->where('id', $photoId)->first();
                    if ($photoBd)
                    {
                        $photoPath = storage_path("app/public/{$photoBd->path}");
                        $relativeNameInZipFile = basename($photoPath);
                        $zip->addFile($photoPath, $relativeNameInZipFile);
                    }
                }

                $zip->close();
            }
            return response()->download(public_path($fileName))->deleteFileAfterSend(true);
        }
        else if (count($photos) == 1)
        {
            $photoBd = Photo::all()->where('id', $photos[0])->first();
            if ($photoBd)
            {
                $photoPath = storage_path("app/public/{$photoBd->path}");
                return response()->download($photoPath);
            }
        }
    }
    public function deletePhotos(Request $request)
    {
        $data = $request->only(['photos']);

        $photos = $data['photos'];

        if (count($photos) > 0)
        {
            foreach ($photos as $photoId)
            {
                $photoBd = Photo::all()->where('id', $photoId)->first();

                if ($photoBd)
                {
                    $albumPhotos = AlbumPhoto::all()->where('photo_id', $photoBd->id);
                    foreach ($albumPhotos as $albumPhoto)
                    {
                        $albums = Album::all()->where('cover', $photoBd->url);
                        foreach ($albums as $album){
                            $album->cover = "/storage/albums/placeholderAlbum.png";
                            $album->save();

                            $countAlbumPhotos=AlbumPhoto::where('album_id',$album->id)->count();
                            if($countAlbumPhotos === 0){
                                $album->cover = "/storage/albums/placeholderAlbum.png";
                                $album->save();
                            }
                        }


                        //dd($albums);
                        $albumPhoto->first()->delete();
                    }
                    $photoBd->delete();
                    Storage::disk('public')->delete($photoBd->path);
                }
            }
        }
    }
    public function changeDate(Request $request)
    {
        $data = $request->only(['photos', 'date']);
        $photos = $data['photos'];
        $date = $data['date'];
        if ((count($photos) > 0) && $date)
        {
            foreach ($photos as $photoId)
            {
                $photoBd = Photo::all()->where('id', $photoId)->first();

                if ($photoBd)
                {
                    $photoBd->created_at = $date;
                    $photoBd->save();
                }
            }
        }
    }
}
