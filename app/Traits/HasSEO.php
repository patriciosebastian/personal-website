<?php

namespace App\Traits;

use Artesaos\SEOTools\Facades\SEOTools;

/**
 * Summary of HasSEO
 *
 * Provides SEO helper method for controllers.
 * Sets OpenGraph, Twitter Card, JSON-LD metadata,
 * keywords, and article metadata using SEOTools.
 *
 */
trait HasSEO
{
    protected function setSEO(
        string $title,
        string $description,
        string $type = 'website',
        ?string $image = null,
        ?string $canonical = null,
        ?array $articleMeta = null,
        ?array $keywords = null,
    ): void
    {
        $canonical ??= url()->current();
        
        SEOTools::setCanonical($canonical);

        if ($keywords) {
            SEOTools::metatags()->setKeywords($keywords);
        }
        
        SEOTools::opengraph()->setTitle($title);
        SEOTools::opengraph()->setDescription($description);
        SEOTools::opengraph()->setUrl($canonical);
        SEOTools::opengraph()->addProperty('type', $type);

        if ($type === 'article' && $articleMeta) {
            SEOTools::opengraph()->setArticle($articleMeta);
        }
        
        SEOTools::twitter()->setTitle($title);
        SEOTools::twitter()->setDescription($description);
        SEOTools::twitter()->setSite('@its_psalazar');
        
        SEOTools::jsonLd()->setTitle($title);
        SEOTools::jsonLd()->setDescription($description);
        SEOTools::jsonLd()->setType(ucfirst($type));

        if ($type === 'article' && $articleMeta) {
            SEOTools::jsonLd()->addValue('author', [
                '@type' => 'Person',
                'name' => $articleMeta['author'] ?? 'Patricio Salazar',
                'url' => 'https://patriciosalazar.dev',
            ]);

            SEOTools::jsonLd()->addValue('publisher', [
                '@type' => 'Person',
                'name' => 'Patricio Salazar',
            ]);

            SEOTools::jsonLd()->addValue('datePublished', $articleMeta['published_time']);
            SEOTools::jsonLd()->addValue('dateModified', $articleMeta['modified_time']);
            SEOTools::jsonLd()->addValue('mainEntityOfPage', [
                '@type' => 'WebPage',
                '@id' => $canonical,
            ]);

            if (isset($articleMeta['tag'])) {
                SEOTools::jsonLd()->addValue('keywords', implode(', ', $articleMeta['tag']));
            }

            SEOTools::jsonLd()->addValue('articleSection', $articleMeta['section'] ?? 'Technology');
            SEOTools::jsonLd()->addValue('inLanguage', 'en-US');
        }
        
        if ($image) {
            SEOTools::opengraph()->addImage($image);
            SEOTools::twitter()->setImage($image);
            SEOTools::jsonLd()->addImage($image);
        }
    }
}