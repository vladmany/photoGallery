<?php


namespace App\Services;


use App\Models\Dashboard\Correct;
use App\Models\Dashboard\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;
use phpDocumentor\Reflection\Types\Integer;

class CorrectService
{
    public function store(Request $request)
    {
        $data = $request->all();
        $id = (int)$data['data']['photo_id'];
        $item = Correct::where('photo_id', $id)->get()->first();
        if($item) {
            $item->update($data['data']);
        } else {
            Correct::create($data['data']);
        }
        $this->saveFile($id);
    }

    private function saveFile(int $id)
    {

        $corrects = Correct::where('photo_id', $id)
            ->with('photo')
            ->get()
            ->first();
        $brightness = $corrects->brightness-100;
        $contrast = $corrects->contrast-100;
        $grayscale = $corrects->grayscale;
        $saturate = $corrects->saturate-100;

        $photo = $corrects->photo;
        $url = public_path($photo->url);
        $image = Image::make($url);


        $image
            ->brightness($brightness)
            ->contrast($contrast) # ok
//            ->greyscale($grayscale)
//            ->colorize(
//                $saturate,
//                $saturate,
//                $saturate
//            )
        ;

        $image->save();
    }
}
