# Laravel Mix WP Blocks

## About

Laravel mix extension to transpile WordPress blocks.

`npm install laravel-mix-wp-blocks --save-dev`
`yarn add -D laravel-mix-wp-blocks`

## Usage

```js
require("laravel-mix-wp-blocks")

mix.block('resources/assets/scripts/blocks.js', 'scripts')
```

Now you have access to all dependencies using `@wordpress` package import syntax. Example:

```
import { RichText } from '@wordpress/block-editor'
```

You will also find a json file accompanying each script (in your `dist` dir) containing all the `@wordpress` dependencies utilized by that script.

You can use that JSON file when enqueing your block in PHP to make sure your declared dependencies always match up with your actual usage.
