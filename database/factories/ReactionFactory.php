<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReactionFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'post_id' => Post::factory(),
            'emoji' => fake()->regexify('[A-Za-z0-9]{50}'),
            'count' => fake()->numberBetween(-10000, 10000),
        ];
    }
}
