<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotoAnimationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photo_animations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('animation_id')->comment('анимация');
            $table->unsignedBigInteger('photo_id')->comment('фото');
            $table->integer('number')->comment('номер фото в анимации');
            $table->timestamps();
        });

        Schema::table('photo_animations', function (Blueprint $table){
            $table->foreign('animation_id')
                ->references('id')
                ->on('animations')
                ->onDelete('cascade');
        });

        Schema::table('photo_animations', function (Blueprint $table){
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
        Schema::dropIfExists('photo_animations');
    }
}
