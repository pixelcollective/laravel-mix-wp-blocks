# Laravel Mix WP Blocks

**Current status:** borked by build

I don't have time to figure this out right now. I think it might be easier once k.adam updates his repo with the build-friendly script.

Tried dismantling a bit of it (changing imports, etc. but wasn't getting anywhere.)

## About

Laravel Mix plugin to facilitate creating WordPress blocks.

Integrates K Adam White's [Hot-Reloading Utilities for WordPress Block Editor](https://github.com/kadamwhite/block-editor-hmr). See further documentation there.

Early release.

## Install

`npm install laravel-mix-wp-blocks --save-dev`

`yarn add -D laravel-mix-wp-blocks`

## Usage

```js
require("laravel-mix-wp-blocks")

mix.blocks({ srcDir, destDir })
```
