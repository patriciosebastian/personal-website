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
        Schema::disableForeignKeyConstraints();

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->unique();
            $table->string('subtitle', 200)->nullable();
            $table->string('preview_text', 1000)->nullable();
            $table->longText('content');
            $table->string('slug', 100)->unique();
            $table->foreignId('user_id')->constrained();
            $table->timestamp('published_at')->nullable();
            $table->string('status', 20)->default('draft');
            $table->boolean('is_freelance')->default(false);
            $table->boolean('is_web_development')->default(false);
            $table->boolean('is_tech')->default(false);
            $table->boolean('is_life')->default(false);
            $table->boolean('is_entrepreneurship')->default(false);
            $table->boolean('is_side_project')->default(false);
            $table->boolean('is_product_review')->default(false);
            $table->boolean('is_thoughts')->default(false);
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
