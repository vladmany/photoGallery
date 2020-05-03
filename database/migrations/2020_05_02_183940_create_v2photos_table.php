<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateV2photosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('v2photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('автор фото');
            $table->unsignedBigInteger('album_id')->comment('альбом с фото');
            $table->unsignedBigInteger('kind_id')->comment('вид мультимедиа');
            $table->integer('width')->comment('ширина фото');
            $table->integer('height')->comment('высота фото');
            $table->string('url')->comment('ссылка на фото');
            $table->integer('size')->comment('размер файла');
            $table->string('extension', 5)->comment('формат файла');
            $table->string('path')->comment('ссылка на файл');
            $table->timestamps();
        });

        Schema::table('v2photos', function (Blueprint $table){
            $table->foreign('album_id')
                ->references('id')
                ->on('albums')
                ->onDelete('cascade');
        });

        Schema::table('v2photos', function (Blueprint $table){
            $table->foreign('kind_id')
                ->references('id')
                ->on('v2kinds')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('v2photos');
    }
}
