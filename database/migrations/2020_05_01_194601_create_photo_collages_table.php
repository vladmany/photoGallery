<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotoCollagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photo_collages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('collage_id')->comment('коллаж');
            $table->unsignedBigInteger('photo_id')->comment('фото');
            $table->integer('number')->comment('номер фото в коллаже');
            $table->timestamps();
        });

        Schema::table('photo_collages', function (Blueprint $table){
            $table->foreign('collage_id')
                ->references('id')
                ->on('collages')
                ->onDelete('cascade');
        });

        Schema::table('photo_collages', function (Blueprint $table){
            $table->foreign('photo_id')
                ->references('id')
                ->on('photos')
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
        Schema::dropIfExists('photo_collages');
    }
}
