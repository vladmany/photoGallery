<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCollagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type_id')->comment('тип коллажа');
            $table->integer('size')->comment('размер файла');
            $table->string('url')->comment('ссылка на коллаж');
            $table->timestamps();
        });

        Schema::table('collages', function (Blueprint $table){
            $table->foreign('type_id')
                ->references('id')
                ->on('collage_types')
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
        Schema::dropIfExists('collages');
    }
}
