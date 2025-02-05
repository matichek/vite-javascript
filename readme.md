# Vite JavaScript Project

This project is a Vite-based JavaScript application that includes SCSS styling and modular JavaScript components. It is designed to be used as a WordPress theme or standalone web application.

## Project Structure

- **html/**: Contains HTML files (`index.html`, `sample.html`) used as entry points for the application.
- **src/**: Contains JavaScript and SCSS source files.
  - **main.js**: Main JavaScript entry file.
  - **js/**: Directory for additional JavaScript modules.
  - **style/**: Directory for SCSS styles.
- **dist/**: Output directory for built files.

## Setup

1. **Install Dependencies**: Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

2. **Development Server**: Start the Vite development server:

   ```bash
   npm run dev
   ```

   This will serve your application at `http://localhost:3000`.

3. **Build for Production**: Compile and bundle your application for production:

   ```bash
   npm run build
   ```

   The output will be placed in the `dist` directory.

## Usage in WordPress

To use the compiled assets in a WordPress theme, enqueue the scripts and styles in your theme's `functions.php`:

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

