<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $maxId = DB::table('posts')->max('id') ?? 0;
        DB::statement("SELECT setval(pg_get_serial_sequence('posts', 'id'), $maxId)");

        $existingCount = Post::count();
        $totalNeeded = 54;
        $toCreate = max(0, $totalNeeded - $existingCount);

        if ($toCreate > 0) {
            Post::factory()->count($toCreate)->create([
                'status' => 'published',
            ]);
        }
    }
}
