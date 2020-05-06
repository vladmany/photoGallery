<?php

namespace App\Models\Dashboard;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Photo extends Model
{
    protected $fillable = ['name', 'kind_id', 'user_id', 'album_id', 'kind_id', 'width', 'height', 'url', 'size', 'extension', 'path'];

    public function Album()
    {
        return $this->belongsTo(Album::class);
    }

    public function add(array $data): self
    {
        $file = new self();

        $file->size = $data['size'];
        $file->name = $data['name'];
        $file->path = $data['path'];
        $file->url = $data['url'];
        $file->width = $data['width'];
        $file->height = $data['height'];
        $file->kind_id = $data['kind_id'];

        $file->save();

        return $file;
    }
}
