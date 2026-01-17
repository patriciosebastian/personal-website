<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $sitemap = Cache::remember('sitemap', now()->addHours(24), function () {
            return Sitemap::create()
                ->add(Url::create('/'))
                ->add(Url::create('/blog'))
                ->add(Post::where('status', 'published')->get()->map(fn ($post) =>
                    Url::create("/blog/{$post->slug}")
                        ->setLastModificationDate($post->updated_at ?? $post->published_at ?? $post->created_at)
                ))
                ->render();
        });

        return response($sitemap)->header('Content-Type', 'application/xml');
    }
}
