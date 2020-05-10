<?php

namespace App\Models\Dashboard;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = ['name'];
    protected $attributes = [
        'url'=> 'none-url'
    ];

    public function photos()
    {
        return $this->belongsToMany(Photo::class);
    }

    public function add(array $data): self
    {
        $file = new self();

        $file->name = $data['name'];

        $file->save();

        return $file;
    }
}
