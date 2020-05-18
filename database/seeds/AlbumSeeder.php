<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('albums')->insert([
            'name' => 'Избранное',
            'created_at' => Date('Y-m-d H:i:s'),
            'cover' => '/storage/albums/placeholderAlbum.png',
            'url' => 'http://gallery/album/'.base64_encode('1'),
        ]);
    }
}
