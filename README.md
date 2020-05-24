# Laravel Mix WP Blocks

[![Maintainability](https://api.codeclimate.com/v1/badges/4445cb074eab29b4ba42/maintainability)](https://codeclimate.com/github/pixelcollective/laravel-mix-wp-blocks/maintainability) [![npm version](https://badge.fury.io/js/%40tinypixelco%2Flaravel-mix-wp-blocks.svg)](https://badge.fury.io/js/%40tinypixelco%2Flaravel-mix-wp-blocks)

## About

Laravel mix extension to transpile WordPress block scripts.

## Installation

```sh
npm install @tinypixelco/laravel-mix-wp-blocks --save-dev
```

```sh
yarn add -D @tinypixelco/laravel-mix-wp-blocks
```

## Usage

In webpack.config.js:

```js
require("@tinypixelco/laravel-mix-wp-blocks")

mix.block('resources/assets/scripts/blocks.js', 'scripts')
```

By doing so you'll find that you can now utilize all `@wordpress` scoped dependencies using ECMAScript 6 import syntax. Example:

```js
import { RichText } from '@wordpress/block-editor'
```

These packages are included as [webpack externals](https://webpack.js.org/configuration/externals/), so there is no reason to add them to your package file.

You will also find a php manifest file accompanying each script in your distribution directory. This file declares an array of dependencies based on what you've used in your scripts. Require it and you're set.

Additional [Dependency Extraction Webpack Plugin options](https://www.npmjs.com/package/@wordpress/dependency-extraction-webpack-plugin#options) maybe be provided as a third argument to `mix.block()`:

```js
mix.block('resources/assets/scripts/blocks.js', 'scripts', {
  outputFormat: 'json',
})
```

Besides the plugin options there is a special flag for the common use case of turning off `@babel/runtime/regenerator` handling by `wp-polyfill`.

```js
mix.block('resources/assets/scripts/blocks.js', 'scripts', {
  disableRegenerator: true,
})
```