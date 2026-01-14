<?php

namespace App\Http\Controllers;

use App\Events\NewPost;
use App\Http\Requests\PostStoreRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Jobs\SyncMedia;
use App\Models\Post;
use App\Traits\HasSEO;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    use HasSEO;

    public function index(Request $request): Response
    {
        $title = 'Blog Posts - Patricio Salazar';
        $description = 'Read my latest articles on web development, side projects, learning in public, and more by Patricio Salazar.';

        $this->setSEO(
            title: $title,
            description: $description,
            type: 'website',
        );

        $query = Post::query()->where('status', 'published');

        $tagFilters = [
            'freelance' => 'is_freelance',
            'web_development' => 'is_web_development',
            'tech' => 'is_tech',
            'life' => 'is_life',
            'entrepreneurship' => 'is_entrepreneurship',
            'side_project' => 'is_side_project',
            'product_review' => 'is_product_review',
            'thoughts' => 'is_thoughts',
        ];

        if ($request->filled('tag')) {
            $tags = explode(',', $request->input('tag'));

            $query->where(function ($q) use ($tags, $tagFilters) {
                foreach ($tags as $tag) {
                    if (isset($tagFilters[$tag])) {
                        $q->orWhere($tagFilters[$tag], true);
                    }
                }
            });
        }

        $availableTags = collect($tagFilters)
            ->filter(
                fn ($column) => Post::where('status', 'published')
                ->where($column, true)
                ->exists()
            )
            ->keys()
            ->toArray();

        $sortOrder = $request->input('sort', 'desc');

        if (in_array($sortOrder, ['asc', 'desc'])) {
            $query->orderBy('created_at', $sortOrder);
        }

        $posts = $query->paginate(9)->withQueryString();

        return Inertia::render('post/index', [
            'posts' => fn () => $posts,
            'availableTags' => fn () => $availableTags,
            'filters' => fn () => [
                'tag' => $request->input('tag'),
                'sort' => $sortOrder,
            ],
            'seo' => [
                'title' => $title,
                'description' => $description,
            ],
        ]);
    }

    public function show(Request $request, Post $post): Response
    {
        $this->setSEO(
            title: $post->title,
            description: $post->preview_text ?? $post->subtitle ?? "$post->title - by Patricio Salazar",
            type: 'article',
        );

        return Inertia::render('post/show', [
            'post' => $post,
            'seo' => [
                'title' => $post->title,
                'description' => $post->preview_text ?? $post->subtitle ?? "$post->title - by Patricio Salazar",
            ],
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('post/create');
    }

    public function store(PostStoreRequest $request): RedirectResponse
    {
        $post = Post::create($request->validated());

        SyncMedia::dispatch($post);

        NewPost::dispatch($post);

        $request->session()->flash('post.title', $post->title);

        return redirect()->route('post.index');
    }

    public function edit(Request $request, Post $post): Response
    {
        $post = Post::find($post);

        return Inertia::render('post/Edit', [
            'post' => $post,
        ]);
    }

    public function update(PostUpdateRequest $request, Post $post): RedirectResponse
    {
        $post = Post::find($post);

        $post->save();

        $request->session()->flash('post.title', $post->title);

        return redirect()->route('post.index');
    }

    public function destroy(Request $request, Post $post): RedirectResponse
    {
        $post = Post::find($post);

        $post->delete();

        $request->session()->flash('post.title', $post->title);

        return redirect()->route('post.index');
    }
}
