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
        $diff = [];
//        dd($item->brightness, $data['data']['brightness']);
        if($item) {
            $diff['brightness'] = ($item->brightness-100) - $data['data']['brightness'];
            $diff['contrast'] = ($item->contrast-100) - $data['data']['contrast'];
//            dd($item->brightness, $diff);
            $item->brightness = $data['data']['brightness']+100;
            $item->contrast = $data['data']['contrast']+100;
//            dd($item, $data['data']);
            $item->save();
//            $item->update($data['data']);
        } else {
            $diff['brightness'] = $data['data']['brightness'];
            $diff['contrast'] = $data['data']['contrast'];
            $data['data']['brightness'] = (int)$data['data']['brightness'] + 100;
            $data['data']['contrast'] = (int)$data['data']['contrast'] + 100;
            $item = Correct::create($data['data']);
        }
        $this->saveFile($diff, $id);
    }

    private function saveFile(array $diff, int $id)
    {
        $corrects = Correct::where('photo_id', $id)
            ->with('photo')
            ->get()
            ->first();

        $brightness = $diff['brightness'];
        $contrast = $diff['contrast'];

//        dd($brightness, $contrast);
//        dd($corrects, $diff);
        $photo = $corrects->photo;
        $url = storage_path("app/public/{$photo->path}");
//        dd($url);
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
        $url = storage_path("app/public/{$photo->path}");

//        if($kind) {
//            $this->mirror($url, $kind);
//        }

        if($angle) {
            $this->rotate($url, -$angle);
        }
    }

    private function rotate(string $url, $angle)
    {
        $image = Image::make($url);
        $image->rotate($angle);
        $image->save($url);
    }

    private function mirror(string $url, $kind)
    {
        $image = Image::make($url);
        $image->flip($kind);
        $image->save();
    }
}
