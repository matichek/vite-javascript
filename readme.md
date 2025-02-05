
## Use in wordpress

```php
function my_theme_enqueue_scripts() {
    $manifest_path = get_template_directory() . '/dist/manifest.json';
    if (file_exists($manifest_path)) {

        $manifest = json_decode(file_get_contents($manifest_path), true);

        // Enqueue the compiled CSS
        if (isset($manifest['src/style/main.scss'])) {
            wp_enqueue_style('my-theme-style', get_template_directory_uri() . '/dist/' . $manifest['src/style/main.scss']['file'], array(), null);
        }

        // Enqueue the compiled JavaScript
        if (isset($manifest['src/main.js'])) {
            wp_enqueue_script('my-theme-script', get_template_directory_uri() . '/dist/' . $manifest['src/main.js']['file'], array(), null, true);
        }
    }
    }
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');
```

