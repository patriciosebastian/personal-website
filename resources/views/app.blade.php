<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <x-theme-init />

        <title inertia>Patricio Salazar - Software Developer</title>

        {!! SEO::generate(true) !!}

        <link rel="icon" href="/favicon.ico" sizes="any">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,800" rel="stylesheet" />

        {{-- Senja Widget --}}
        <script
            strategy="lazyOnload"
            src="https://widget.senja.io/widget/9aeef387-4143-4b01-a516-9aaedd9adced/platform.js"
            defer
        ></script>

        {{-- Cloudflare Web Analytics --}}
        <script
            strategy="afterInteractive"
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon='{"token": "b4ae2d968b044a2cbee0a95e466df1d3"}'
            defer
        ></script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
