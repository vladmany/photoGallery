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
            'name' => 'Тест 1',
            'created_at' => Date('Y-m-d H:i:s'),
        ]);
        DB::table('albums')->insert([
            'name' => 'Тест 2',
            'created_at' => Date('Y-m-d H:i:s'),
        ]);
    }
}
