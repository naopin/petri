<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
        $table->increments('id');
            $table->unsignedInteger('prefecture_id');
            $table->string('city_code')->comment('市区町村コード');
            $table->string('name')->comment('市区町村名');
            $table->timestamps();

            $table->index('prefecture_id');
            $table->index('name');

            $table->foreign('prefecture_id')
            ->references('id')
            ->on('prefectures')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
