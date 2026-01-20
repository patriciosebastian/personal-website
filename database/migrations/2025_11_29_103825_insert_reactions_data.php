<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $reactions = [
            ['id' => 19, 'created_at' => '2024-09-29 08:25:48', 'updated_at' => '2024-09-29 08:25:48', 'post_id' => 5, 'emoji' => 'heart'],
            ['id' => 21, 'created_at' => '2024-09-29 08:30:23', 'updated_at' => '2024-09-29 08:30:23', 'post_id' => 5, 'emoji' => 'heart'],
            ['id' => 22, 'created_at' => '2024-09-29 08:30:29', 'updated_at' => '2024-09-29 08:30:29', 'post_id' => 5, 'emoji' => 'fire'],
            ['id' => 23, 'created_at' => '2024-09-29 08:30:30', 'updated_at' => '2024-09-29 08:30:30', 'post_id' => 5, 'emoji' => 'rocket'],
            ['id' => 24, 'created_at' => '2024-09-29 08:32:42', 'updated_at' => '2024-09-29 08:32:42', 'post_id' => 5, 'emoji' => 'fire'],
            ['id' => 25, 'created_at' => '2024-09-29 08:33:01', 'updated_at' => '2024-09-29 08:33:01', 'post_id' => 5, 'emoji' => 'rocket'],
            ['id' => 114, 'created_at' => '2024-09-30 03:42:32', 'updated_at' => '2024-09-30 03:42:32', 'post_id' => 5, 'emoji' => 'heart'],
            ['id' => 115, 'created_at' => '2024-10-19 03:16:31', 'updated_at' => '2024-10-19 03:16:31', 'post_id' => 5, 'emoji' => 'heart'],
            ['id' => 116, 'created_at' => '2024-10-19 03:56:54', 'updated_at' => '2024-10-19 03:56:54', 'post_id' => 5, 'emoji' => 'fire'],
            ['id' => 117, 'created_at' => '2024-10-19 03:56:56', 'updated_at' => '2024-10-19 03:56:56', 'post_id' => 5, 'emoji' => 'fire'],
            ['id' => 118, 'created_at' => '2024-10-19 03:57:02', 'updated_at' => '2024-10-19 03:57:02', 'post_id' => 5, 'emoji' => 'rocket'],
            ['id' => 119, 'created_at' => '2024-10-19 03:57:04', 'updated_at' => '2024-10-19 03:57:04', 'post_id' => 5, 'emoji' => 'rocket'],
            ['id' => 120, 'created_at' => '2024-10-19 04:24:18', 'updated_at' => '2024-10-19 04:24:18', 'post_id' => 5, 'emoji' => 'rocket'],
            ['id' => 121, 'created_at' => '2024-12-13 05:49:29', 'updated_at' => '2024-12-13 05:49:29', 'post_id' => 6, 'emoji' => 'rocket'],
            ['id' => 122, 'created_at' => '2025-05-29 19:30:41', 'updated_at' => '2025-05-29 19:30:41', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 123, 'created_at' => '2025-05-29 19:30:43', 'updated_at' => '2025-05-29 19:30:43', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 124, 'created_at' => '2025-05-29 19:30:43', 'updated_at' => '2025-05-29 19:30:43', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 125, 'created_at' => '2025-05-29 19:30:45', 'updated_at' => '2025-05-29 19:30:45', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 126, 'created_at' => '2025-05-29 19:30:46', 'updated_at' => '2025-05-29 19:30:46', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 127, 'created_at' => '2025-05-29 19:30:46', 'updated_at' => '2025-05-29 19:30:46', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 128, 'created_at' => '2025-05-29 19:30:47', 'updated_at' => '2025-05-29 19:30:47', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 129, 'created_at' => '2025-05-29 19:30:47', 'updated_at' => '2025-05-29 19:30:47', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 130, 'created_at' => '2025-05-29 19:30:47', 'updated_at' => '2025-05-29 19:30:47', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 131, 'created_at' => '2025-05-29 19:30:48', 'updated_at' => '2025-05-29 19:30:48', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 132, 'created_at' => '2025-05-29 19:30:49', 'updated_at' => '2025-05-29 19:30:49', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 133, 'created_at' => '2025-07-10 22:18:29', 'updated_at' => '2025-07-10 22:18:29', 'post_id' => 5, 'emoji' => 'fire'],
            ['id' => 134, 'created_at' => '2025-08-10 09:56:58', 'updated_at' => '2025-08-10 09:56:58', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 135, 'created_at' => '2025-08-10 09:56:58', 'updated_at' => '2025-08-10 09:56:58', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 136, 'created_at' => '2025-08-10 10:11:27', 'updated_at' => '2025-08-10 10:11:27', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 137, 'created_at' => '2025-08-10 10:11:55', 'updated_at' => '2025-08-10 10:11:55', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 138, 'created_at' => '2025-08-10 10:11:56', 'updated_at' => '2025-08-10 10:11:56', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 139, 'created_at' => '2025-08-10 10:11:57', 'updated_at' => '2025-08-10 10:11:57', 'post_id' => 14, 'emoji' => 'fire'],
            ['id' => 140, 'created_at' => '2025-08-10 10:11:58', 'updated_at' => '2025-08-10 10:11:58', 'post_id' => 14, 'emoji' => 'fire'],
        ];

        // DB::table('reactions')->insert($reactions);
    }
};
