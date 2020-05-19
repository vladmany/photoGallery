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
        if($item) {
            $diff['brightness'] = $item->brightness - $data['data']['brightness'];
            $diff['contrast'] = $item->contrast - $data['data']['contrast'];
            $item->brightness = $data['data']['brightness']+100;
            $item->contrast = $data['data']['contrast']+100;
//            dd($item, $data['data']);
            $item->save();
//            $item->update($data['data']);
        } else {
            $diff['brightness'] = $data['data']['brightness'];
            $diff['contrast'] = $data['data']['contrast'];
            $data['data']['brightness'] += 100;
            $data['data']['contrast'] += 100;
            Correct::create($data['data']);
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

        $photo = $corrects->photo;
        $url = public_path($photo->url);
        $image = Image::make($url);

        $brightness = $this->delimiter($brightness, 2);
        $contrast = $this->delimiter($contrast, 2);

        $image
            ->brightness($brightness)
            ->contrast($contrast)
        ;
        $image->save();
    }

    private function delimiter(int $val, float $delim): int
    {
        return (int)$val/$delim;
    }
}
