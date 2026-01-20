<?php

namespace App\Console\Commands;

use App\Models\Post;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/blog'))
            ->add(Post::where('status', 'published')->get()->map(fn ($post) =>
                Url::create("/blog/{$post->slug}")
                    ->setLastModificationDate($post->updated_at ?? $post->published_at ?? $post->created_at)
            ))
            ->writeToFile(public_path('sitemap.xml'));
    }
}
