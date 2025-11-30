<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'subtitle' => fake()->regexify('[A-Za-z0-9]{200}'),
            'preview_text' => fake()->regexify('[A-Za-z0-9]{1000}'),
            'content' => fake()->paragraphs(3, true),
            'slug' => fake()->slug(),
            'user_id' => User::factory(),
            'published_at' => fake()->dateTime(),
            'status' => fake()->regexify('[A-Za-z0-9]{20}'),
            'is_freelance' => fake()->boolean(),
            'is_web_development' => fake()->boolean(),
            'is_tech' => fake()->boolean(),
            'is_life' => fake()->boolean(),
            'is_entrepreneurship' => fake()->boolean(),
            'is_side_project' => fake()->boolean(),
            'is_product_review' => fake()->boolean(),
            'is_thoughts' => fake()->boolean(),
        ];
    }
}
