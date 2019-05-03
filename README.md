# Laravel Mix WP Blocks

## About

Laravel Mix plugin to facilitate creating WordPress blocks.

Integrates K Adam White's [Hot-Reloading Utilities for WordPress Block Editor](https://github.com/kadamwhite/block-editor-hmr). See further documentation there.

**Current status:**

Early release.

HMR not functioning. The rest of it is *solid*.

## Install

`npm install laravel-mix-wp-blocks --save-dev`

`yarn add -D laravel-mix-wp-blocks`

## Usage

You can see an example in the provided `/demo` repo.

```js
require("laravel-mix-wp-blocks")

mix
  .blocks()
  .js('resources/assets/scripts/blocks.js', 'scripts')
  .sass('resources/assets/styles/blocks.scss', 'styles')
```
