<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
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
            'published_at' => 'datetime',
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

    protected static $tagMap = [
        'freelance' => 'is_freelance',
        'web_development' => 'is_web_development',
        'tech' => 'is_tech',
        'life' => 'is_life',
        'entrepreneurship' => 'is_entrepreneurship',
        'side_project' => 'is_side_project',
        'product_review' => 'is_product_review',
        'thoughts' => 'is_thoughts',
    ];

    public static function booted(): void
    {
        static::saved(fn () => cache()->forget('available_post_tags'));
        static::deleted(fn () => cache()->forget('available_post_tags'));
    }

    /**
     * Relationships
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function reactions(): HasMany
    {
        return $this->hasMany(Reaction::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Scopes
     */
    public function scopePublished(Builder $query): void
    {
        $query->where('status', 'published');
    }

    public function scopeWithTags(Builder $query, ?string $tags): void
    {
        if (empty($tags)) {
            return;
        }

        $tagFilters = self::$tagMap;

        $selectedTags = explode(',', $tags);

        $query->where(function ($q) use ($selectedTags, $tagFilters) {
            foreach ($selectedTags as $tag) {
                if (isset($tagFilters[$tag])) {
                    $q->orWhere($tagFilters[$tag], true);
                }
            }
        });
    }

    /**
     * Static Methods
     */
    public static function getAvailableTags(): array
    {
        return cache()->remember('available_post_tags', now()->addDay(), function () {
            $selects = collect(self::$tagMap)
                ->map(fn($column, $label) => "SUM(CASE WHEN $column THEN 1 ELSE 0 END) as $label")
                ->implode(', ');

            $counts = self::published()
                ->selectRaw($selects)
                ->first();

            return collect(self::$tagMap)
                ->keys()
                ->filter(fn($label) => ($counts->$label ?? 0) > 0)
                ->values()
                ->toArray();
        });
    }
}
