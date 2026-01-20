<?php

namespace Tests\Feature\Http\Controllers;

use App\Events\NewPost;
use App\Jobs\SyncMedia;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\PostController
 */
final class PostControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $posts = Post::factory()->count(3)->create();

        $response = $this->get(route('posts.index'));
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $post = Post::factory()->create();

        $response = $this->get(route('posts.show', $post));
    }


    #[Test]
    public function create_behaves_as_expected(): void
    {
        $response = $this->get(route('posts.create'));
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\PostController::class,
            'store',
            \App\Http\Requests\PostStoreRequest::class
        );
    }

    #[Test]
    public function store_saves_and_redirects(): void
    {
        $title = fake()->sentence(4);
        $content = fake()->paragraphs(3, true);
        $slug = fake()->slug();

        Queue::fake();
        Event::fake();

        $response = $this->post(route('posts.store'), [
            'title' => $title,
            'content' => $content,
            'slug' => $slug,
        ]);

        $posts = Post::query()
            ->where('title', $title)
            ->where('content', $content)
            ->where('slug', $slug)
            ->get();
        $this->assertCount(1, $posts);
        $post = $posts->first();

        $response->assertRedirect(route('post.index'));
        $response->assertSessionHas('post.title', $post->title);

        Queue::assertPushed(SyncMedia::class, function ($job) use ($post) {
            return $job->post->is($post);
        });
        Event::assertDispatched(NewPost::class, function ($event) use ($post) {
            return $event->post->is($post);
        });
    }


    #[Test]
    public function edit_behaves_as_expected(): void
    {
        $post = Post::factory()->create();

        $response = $this->get(route('posts.edit', $post));
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\PostController::class,
            'update',
            \App\Http\Requests\PostUpdateRequest::class
        );
    }

    #[Test]
    public function update_saves_and_redirects(): void
    {
        $post = Post::factory()->create();
        $title = fake()->sentence(4);
        $content = fake()->paragraphs(3, true);
        $slug = fake()->slug();

        $response = $this->put(route('posts.update', $post), [
            'title' => $title,
            'content' => $content,
            'slug' => $slug,
        ]);

        $posts = Post::query()
            ->where('title', $title)
            ->where('content', $content)
            ->where('slug', $slug)
            ->get();
        $this->assertCount(1, $posts);
        $post = $posts->first();

        $response->assertRedirect(route('post.index'));
        $response->assertSessionHas('post.title', $post->title);
    }


    #[Test]
    public function destroy_deletes_and_redirects(): void
    {
        $post = Post::factory()->create();

        $response = $this->delete(route('posts.destroy', $post));

        $response->assertRedirect(route('post.index'));
        $response->assertSessionHas('post.title', $post->title);

        $this->assertModelMissing($post);
    }
}
