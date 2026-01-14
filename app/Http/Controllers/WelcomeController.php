<?php

namespace App\Http\Controllers;

use App\Traits\HasSEO;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    use HasSEO;

    public function __invoke(Request $request): Response
    {
        $title = "Patricio Salazar - Software Developer";
        $description = "Welcome to the personal website of Patricio Salazar, a software developer specializing in web applications. Explore my projects, blog posts, and learn more about me.";

        $this->setSEO(
            title: $title,
            description: $description,
        );

        return Inertia::render('welcome', [
            'latestPost' => \App\Models\Post::where('status', 'published')
                ->latest()
                ->first(),
            'seo' => [
                'title' => $title,
                'description' => $description,
            ],
        ]);
    }
}
