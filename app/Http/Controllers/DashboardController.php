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

    public function show(Request $request): Response
    {
        return Inertia::render('dashboard/create-post');
    }
}
