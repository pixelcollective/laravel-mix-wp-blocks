const mix = require('laravel-mix')
require('laravel-mix-wp-blocks')

/**
 * Browsersync
 */
mix.browserSync({
  proxy: 'http://example.valet',
  files: [
    'dist/styles/**/*.css',
    'dist/scripts/**/*.js',
  ],
})

/**
 * Settings
 */
mix.setPublicPath('./dist')

/**
 * Blocks
 */
mix
  .blocks()
  .js('resources/assets/scripts/blocks.js', 'scripts')
  .sass('resources/assets/styles/blocks.scss', 'styles')
