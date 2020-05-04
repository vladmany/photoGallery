<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\PhotoRequest;
use App\Models\Dashboard\Photo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return Photo::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PhotoRequest $request)
    {
        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $kindId = $request->all()['kind'] ?? null;
            $date = Carbon::now()->format('Y_m_d');
            $data = [];

            $data['size'] = $file->getSize();
            $data['name'] = $file->getClientOriginalName();
            $data['path'] = $file->store("/{$date}", 'images');
            $data['extension'] = $file->getExtension();
            $data['url'] = Storage::url($data['path']);
            $data['width'] = 1; # !!!!!!!
            $data['height'] = 1; # !!!!!!!
            $data['kind_id'] = $kindId;

            Photo::add($file);
        }

        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashboard\Photo  $photo
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
     * @param  \App\Models\Dashboard\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function update(PhotoRequest $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashboard\Photo  $photo
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
}
