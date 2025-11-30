<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'latestPost' => Inertia::defer(
            fn () => App\Models\Post::latest()->first()
        ),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/blog', PostController::class . '@index')->name('posts.index');

Route::resource('posts', App\Http\Controllers\PostController::class);

Route::resource('reactions', App\Http\Controllers\ReactionController::class)->only('store');

require __DIR__.'/settings.php';
