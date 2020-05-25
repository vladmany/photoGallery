<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Светлана',
            'surname' => 'Денисова',
            'avatar_url' => '/storage/albums/placeholderAlbum.png',
            'email' => 'slonikzver1989@gmail.com',
            'password' => password_hash('qwer1234', PASSWORD_DEFAULT),
            'created_at' => Date('Y-m-d H:i:s'),
        ]);
    }
}
