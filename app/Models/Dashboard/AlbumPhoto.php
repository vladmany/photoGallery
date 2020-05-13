<?php

namespace App\Models\Dashboard;

use Illuminate\Database\Eloquent\Model;

class AlbumPhoto extends Model
{
    protected $table = 'album_photo';

    protected $fillable = ['album_id', 'photo_id'];
}
