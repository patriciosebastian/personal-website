<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Reaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $publishedPosts = Post::where('status', 'published')
            ->latest()
            ->paginate(10);

        $draftPosts = Post::query()
            ->where('status', 'draft')
            ->latest()
            ->take(10)
            ->get();

        $reactions = Reaction::query()->with('post', function ($query) {
            $query->select('id', 'title');
        })
            ->latest()
            ->take(10)
            ->get();

        $query = $request->query('post');
        $postToPreview = Post::where('slug', $query)->first() ?? null;

        return Inertia::render('dashboard/dashboard', [
            'publishedPosts' => $publishedPosts,
            'draftPosts' => $draftPosts,
            'reactions' => $reactions,
            'postToPreview' => $postToPreview,
        ]);
    }

    public function show(Request $request, Post $post): Response
    {
        return Inertia::render('dashboard/create-post', [
            'post' => $post,
        ]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'preview_text' => 'nullable|string|max:500',
            'content' => 'required|string',
            'slug' => 'required|string|max:255|unique:posts,slug',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date',
            'is_freelance' => 'sometimes|boolean',
            'is_web_development' => 'sometimes|boolean',
            'is_tech' => 'sometimes|boolean',
            'is_life' => 'sometimes|boolean',
            'is_entrepreneurship' => 'sometimes|boolean',
            'is_side_project' => 'sometimes|boolean',
            'is_product_review' => 'sometimes|boolean',
            'is_thoughts' => 'sometimes|boolean',
        ]);

        Post::create([
            ...$validated,
            'user_id' => $request->user()->id,
        ]);

        return Inertia::render('dashboard/create-post', [
            'message' => 'Post created successfully!',
        ]);
    }
}
