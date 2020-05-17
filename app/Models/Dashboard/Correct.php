<?php

namespace App\Models\Dashboard;

use Illuminate\Database\Eloquent\Model;

class Correct extends Model
{
    protected $fillable = ['photo_id', 'brightness', 'contrast', 'grayscale', 'saturate'];

    public function photo() {
        return $this->belongsTo(Photo::class);
    }
}
