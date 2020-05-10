<?php

namespace App\Models\Dashboard;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = ['name'];
    protected $attributes = [
        'url'=> 'none-url',
        'cover' => '/storage/albums/placeholderAlbum.png'
    ];

    public function add(array $data): self
    {
        $file = new self();

        $file->name = $data['name'];

        $file->save();

        return $file;
    }
}
