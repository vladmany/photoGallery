<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KindSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kinds')->insert([
            'name' => 'Фото',
        ]);
        DB::table('kinds')->insert([
            'name' => 'Коллаж',
        ]);
        DB::table('kinds')->insert([
            'name' => 'Анимация',
        ]);
    }
}
