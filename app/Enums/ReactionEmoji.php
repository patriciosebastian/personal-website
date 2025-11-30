<?php

namespace App\Enums;

enum ReactionEmoji: string
{
    case HEART = 'heart';
    case FIRE = 'fire';
    case ROCKET = 'rocket';

    public function label(): string
    {
        return match($this) {
            self::HEART => '❤️',
            self::FIRE => '🔥',
            self::ROCKET => '🚀',
        };
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
