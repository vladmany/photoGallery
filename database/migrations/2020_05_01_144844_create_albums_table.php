<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->comment('название альбома');
            $table->unsignedBigInteger('user_id')->comment('создатель альбома')->default(1);
            $table->string('url')->nullable()->comment('ссылка на альбом');
            $table->string('cover')->nullable()->comment('картинка обложки альбома');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
}
