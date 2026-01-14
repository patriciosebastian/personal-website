<?php

namespace App\Traits;

use Artesaos\SEOTools\Facades\SEOTools;

/**
 * Summary of HasSEO
 *
 * Provides SEO helper method for controllers.
 * Sets OpenGraph, Twitter Card, and JSON-LD metadata using SEOTools.
 *
 */
trait HasSEO
{
    protected function setSEO(
        string $title,
        string $description,
        string $type = 'website',
        ?string $image = null,
        ?string $canonical = null
    ): void
    {
        $canonical ??= url()->current();
        
        SEOTools::setCanonical($canonical);
        
        SEOTools::opengraph()->setTitle($title);
        SEOTools::opengraph()->setDescription($description);
        SEOTools::opengraph()->setUrl($canonical);
        SEOTools::opengraph()->addProperty('type', $type);
        
        SEOTools::twitter()->setTitle($title);
        SEOTools::twitter()->setDescription($description);
        SEOTools::twitter()->setSite('@its_psalazar');
        
        SEOTools::jsonLd()->setTitle($title);
        SEOTools::jsonLd()->setDescription($description);
        SEOTools::jsonLd()->setType(ucfirst($type));
        
        if ($image) {
            SEOTools::opengraph()->addImage($image);
            SEOTools::twitter()->setImage($image);
            SEOTools::jsonLd()->addImage($image);
        }
    }
}