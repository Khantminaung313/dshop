<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sliders', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('title_color')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('sub_title_color')->nullable();
            $table->text('intro')->nullable();
            $table->text('intro_color')->nullable();
            $table->longText('description')->nullable();
            $table->text('description_color')->nullable();
            $table->string('image')->nullable();
            $table->string('link')->nullable();
            $table->string('link_color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sliders');
    }
};
