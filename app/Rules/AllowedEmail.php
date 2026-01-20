<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Restricts access to everyone except Patricio.
 */
class AllowedEmail implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $allowedEmails = [
            'psalazardev@gmail.com',
        ];

        if (! \in_array($value, $allowedEmails)) {
            $fail('Only the site owner is allowed to register.');
        }
    }
}
