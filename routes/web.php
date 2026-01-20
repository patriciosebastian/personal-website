<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', WelcomeController::class)->name('home');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/create-post/{post?}', [DashboardController::class, 'show'])->name('posts.show');
    Route::post('/create-post', [DashboardController::class, 'store'])->name('posts.store');
    Route::patch('/create-post/{post}', [DashboardController::class, 'update'])->name('posts.update');
    Route::delete('/delete-post/{post}', [DashboardController::class, 'destroy'])->name('posts.destroy');
});

Route::get('/blog', [PostController::class, 'index'])->name('posts.index');
Route::get('/blog/{post}', [PostController::class, 'show'])->name('posts.show');

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');

require __DIR__.'/settings.php';
