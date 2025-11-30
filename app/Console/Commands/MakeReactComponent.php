<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeReactComponent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:react
                            {name : The name of the component}
                            {--l|loc=components : The location of the component (components, ui, pages)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a new React component in the components, ui, or pages directory.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $componentName = $this->argument('name');
        $location = $this->option('loc');
        $componentsPath = resource_path("js/components/{$componentName}.tsx");
        $uiPath = resource_path("js/components/ui/{$componentName}.tsx");
        $pagesPath = resource_path("js/pages/{$componentName}.tsx");

        $path = match ($location) {
            'components' => $componentsPath,
            'ui' => $uiPath,
            'pages' => $pagesPath,
            default => $componentsPath,
        };

        if (! File::exists($path)) {
            if (! File::isDirectory(dirname($path))) {
                $this->warn("The directory {$location} does not exist.");

                if ($this->confirm("Do you want to create the directory " . resource_path("js/{$location}") . "?")) {
                    File::makeDirectory(resource_path("js/{$location}"));
                    $this->info("Directory " . resource_path("js/{$location}") . " created successfully.");
                } else {
                    $this->error("Directory creation aborted.");
                    $this->fail("Directory creation aborted.");
                    return;
                }

                $this->info("Creating component {$componentName} in " . resource_path("js/{$location}") . "...");
            }

            File::put($path, $this->getComponentTemplate($componentName));

            $this->info("Component {$componentName} created successfully in " . dirname($path));
        } else {
            $this->error("Component {$componentName} already exists in " . dirname($path));
            $this->fail("Component already exists.");
        }
    }

    /**
     * Get the component template.
     *
     * @param string $componentName
     * @return string
     */
    protected function getComponentTemplate(string $componentName): string
    {
        $reactStandardComponentName = ucfirst($componentName);
        $titleCase = preg_replace('/(?<!^)(?=[A-Z])/', ' ', $reactStandardComponentName);

        return <<<EOT
import React from 'react';

export default function {$reactStandardComponentName}() {
  return (
    <>
        <h1>{$titleCase}</h1>
    </>
  );
}
EOT;
    }
}
