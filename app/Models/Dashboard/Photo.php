<?php

namespace App\Models\Dashboard;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Photo extends Model
{
    public function albums()
    {
        return $this->belongsToMany(Album::class);
    }

    public function correct() {
        return $this->hasOne(Correct::class);
    }

    protected $fillable = ['name', 'kind_id', 'user_id', 'album_id', 'kind_id', 'width', 'height', 'url', 'size', 'extension', 'path', 'hash'];

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
