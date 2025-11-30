<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Post;
use App\Models\Reaction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\ReactionController
 */
final class ReactionControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ReactionController::class,
            'store',
            \App\Http\Requests\ReactionStoreRequest::class
        );
    }

    #[Test]
    public function store_saves_and_responds_with(): void
    {
        $post = Post::factory()->create();
        $emoji = fake()->word();

        $response = $this->post(route('reactions.store'), [
            'post_id' => $post->id,
            'emoji' => $emoji,
        ]);

        $reactions = Reaction::query()
            ->where('post_id', $post->id)
            ->where('emoji', $emoji)
            ->get();
        $this->assertCount(1, $reactions);
        $reaction = $reactions->first();

        $response->assertOk();
        $response->assertJson($reaction.count);
    }
}
