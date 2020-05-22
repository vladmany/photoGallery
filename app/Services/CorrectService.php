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
        $data = $data['data'];
        $id = (int)$data['photo_id'];
        $item = Correct::where('photo_id', $id)->get()->first();

        $diff = [];
//        dd($item->brightness, $data['data']['brightness']);
        if($item) {
            $diff['brightness'] = $item->brightness - $data['brightness'];
            $diff['contrast'] = $item->contrast  - $data['contrast'];
//            dd($item->brightness, $diff);
            $item->brightness = $data['brightness'];
            $item->contrast = $data['contrast'];
            $item->save();
        } else {
            $diff['brightness'] = $data['brightness'];
            $diff['contrast'] = $data['contrast'];
//            $data['brightness'] = (int)$data['brightness'];
//            $data['contrast'] = (int)$data['contrast'];
            $item = Correct::create($data);
        }
        $this->saveFile($diff, $id);
    }

    private function saveFile(array $diff, int $id)
    {
        $corrects = Correct::where('photo_id', $id)
            ->with('photo')
            ->get()
            ->first();

        $brightness = $diff['brightness'] - 100;
        $contrast = $diff['contrast'] - 100;

//        dd($brightness, $contrast);
//        dd($corrects, $diff);
        $photo = $corrects->photo;
        $url = storage_path("app/public/".$photo->path);



        $image = Image::make($url);

        $brightness = $this->delimiter($brightness, 2);
        $contrast = $this->delimiter($contrast, 2);

//        dd($brightness, $contrast);

        $image
            ->brightness($brightness)
            ->contrast($contrast)
        ;
        $image->save($url);
    }

    private function delimiter(int $val, float $delim): int
    {
        return (int)$val/$delim;
    }

    public function saveOrient(Request $request)
    {
        $data = $request->all();
        $data = $data['data'];
        $photoId = $data['photo_id'];
        $angle = $data['angle'];
//        $kind = $data['mirror'];

        $photo = Photo::where('id', $photoId)->get()->first();
        $original_url = $photo->path;
        $url = storage_path("app/public/".$photo->path);


//        $new_url = explode('.', $original_url);
//        $arr = [$new_url[0].'_new', $new_url[1]];
//        $new_url = implode('.', $arr);
//
//        $url = storage_path("app/public/".$new_url);
//        dd($new_url);

//        $photo->path = $new_url;
//        $photo->save();

//        if($kind) {
//            $this->mirror($url, $kind);
//        }

        if($angle) {
            $this->rotate($photo, $url, -$angle);
        }
    }

    private function rotate(Photo $photo, string $url, $angle)
    {
        $image = Image::make($url);
        $image->rotate($angle);
        $image->save($url);

//        $photo->update([
//            'path' => $original_url
//        ]);
    }

    private function mirror(string $url, $kind)
    {
        $image = Image::make($url);
        $image->flip($kind);
        $image->save();
    }
}
