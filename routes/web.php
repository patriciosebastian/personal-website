<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'latestPost' => App\Models\Post::where('status', 'published')
            ->latest()
            ->first(),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/create-post/{post?}', [DashboardController::class, 'show'])->name('posts.show');
    Route::post('/create-post', [DashboardController::class, 'store'])->name('posts.store');
    Route::patch('/create-post/{post}', [DashboardController::class, 'update'])->name('posts.update');
    Route::delete('/delete-post/{post}', [DashboardController::class, 'destroy'])->name('posts.destroy');
});

Route::get('/blog', [PostController::class, 'index'])->name('posts.index');
Route::get('/blog/{post}', [PostController::class, 'show'])->name('posts.show');

require __DIR__.'/settings.php';
