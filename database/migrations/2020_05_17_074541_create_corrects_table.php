<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCorrectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('corrects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('photo_id')->comment('ид фото');
            $table->unsignedInteger('brightness')->comment('яркость')->default(0);
            $table->unsignedInteger('contrast')->comment('контраст')->default(0);
            $table->unsignedInteger('grayscale')->comment('осветление')->default(0);
            $table->unsignedInteger('saturate')->comment('насыщенность')->default(0);
            $table->timestamps();
        });

        Schema::table('corrects', function (Blueprint $table){
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
        Schema::dropIfExists('corrects');
    }
}
