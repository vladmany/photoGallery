<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('автор фото')->default(1);
//            $table->unsignedBigInteger('album_id')->nullable()->comment('альбом');
            $table->unsignedBigInteger('kind_id')->comment('вид мультимедиа')->default(1);
            $table->string('name', 100)->comment('оригинальное имя файла с расширением');
            $table->integer('width')->comment('ширина фото');
            $table->integer('height')->comment('высота фото');
            $table->string('url')->comment('ссылка на фото');
            $table->integer('size')->comment('размер файла');
            $table->string('extension', 5)->comment('формат файла');
            $table->string('path')->comment('ссылка на файл');
            $table->boolean('is_selected')->default(false)->comment('выбор фото');
            $table->timestamps();
        });

//        Schema::table('photos', function (Blueprint $table){
//            $table->foreign('album_id')
//                ->references('id')
//                ->on('albums')
//                ->onDelete('set null');
//        });

        Schema::table('photos', function (Blueprint $table){
            $table->foreign('kind_id')
                ->references('id')
                ->on('kinds')
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
        Schema::dropIfExists('photos');
    }
}
