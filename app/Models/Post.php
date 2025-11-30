<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'subtitle',
        'preview_text',
        'content',
        'slug',
        'user_id',
        'published_at',
        'status',
        'is_freelance',
        'is_web_development',
        'is_tech',
        'is_life',
        'is_entrepreneurship',
        'is_side_project',
        'is_product_review',
        'is_thoughts',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'id' => 'integer',
            'user_id' => 'integer',
            'published_at' => 'timestamp',
            'is_freelance' => 'boolean',
            'is_web_development' => 'boolean',
            'is_tech' => 'boolean',
            'is_life' => 'boolean',
            'is_entrepreneurship' => 'boolean',
            'is_side_project' => 'boolean',
            'is_product_review' => 'boolean',
            'is_thoughts' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function reactions(): HasMany
    {
        return $this->hasMany(Reaction::class);
    }
}
