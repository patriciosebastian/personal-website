<?php

use App\Http\Controllers\DashboardController;
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

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/create-post/{post?}', [DashboardController::class, 'show'])->name('create.show');
    Route::patch('/create-post/{post}', [DashboardController::class, 'store'])->name('create.update');
    Route::post('/create-post', [DashboardController::class, 'store'])->name('create.store');
});

Route::get('/blog', [PostController::class, 'index'])->name('posts.index');
Route::get('/blog/{post}', [PostController::class, 'show'])->name('posts.show');

Route::resource('posts', App\Http\Controllers\PostController::class);

require __DIR__.'/settings.php';
