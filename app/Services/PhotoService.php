<?php


namespace App\Services;


use App\Http\Requests\Dashboard\PhotoRequest;
use App\Models\Dashboard\Photo;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PhotoService
{
    public function store(PhotoRequest $request)
    {
        if($this->getFilesSize(storage_path('app/public/images')) >= 1000000000)
        {
            return response()->json(array(
                'code'      =>  401,
                'message'   =>  'На сервере превышен максимальный объем хранения фото(1 ГБ). Обратитесь к владельцу сайта.'
            ), 401);
        }

        $userId = Auth::check() ? Auth::id() : 1;

        if($request->hasFile('photo')) {
//            dd('ЕСТЬ ФАЙЛЫ');
            $file = $request->file('photo');
            $kindId = $request->all()['kind'] ?? 1;
            $date = Carbon::now()->format('Y_m_d');
            $data = [];
            $data['user_id'] = $userId;
            $data['size'] = $file->getSize();
            $data['name'] = $file->getClientOriginalName();
            $data['path'] = $file->store("/images/{$date}", 'public');
            $data['extension'] = $file->getClientOriginalExtension();
            $data['url'] = Storage::url($data['path']);
            $imageSize = getimagesize($file);
            $data['width'] = $imageSize[0];
            $data['height'] = $imageSize[1];
            $data['kind_id'] = $kindId;
            $data['hash'] = md5_file($file);
//            dd(Photo::all()->where('hash', $data['hash'])->where('user_id', $userId)->first());
            if(Photo::all()->where('hash', $data['hash'])->where('user_id', $userId)->first())
            {
                return response()->json(array(
                    'code'      =>  401,
                    'message'   =>  'Текущее фото уже существует в вашей галерее'
                ), 401);
            }

            return Photo::create($data);
        }
    }

    private function getFilesSize($path)
    {
        $fileSize = 0;
        $dir = scandir($path);

        foreach($dir as $file)
        {
            if (($file!='.') && ($file!='..'))
                if(is_dir($path . '/' . $file))
                    $fileSize += $this->getFilesSize($path.'/'.$file);
                else
                    $fileSize += filesize($path . '/' . $file);
        }

        return $fileSize;
    }

    public function creative()
    {

    }
}
