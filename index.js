const mix = require('laravel-mix')
let JavaScript = require('laravel-mix/src/components/JavaScript')

class Block extends JavaScript {
  name() {
    return 'blocks'
  }

  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return [
      '@wordpress/babel-preset-default',
      '@wordpress/dependency-extraction-webpack-plugin',
    ]
  }

  register(entry, output, options = {}) {
    this.userOptions = options;
    super.register(entry, output);
  }

  webpackPlugins() {
    const WordPressDependencyExtraction = require('@wordpress/dependency-extraction-webpack-plugin')

    return new WordPressDependencyExtraction(this.pluginOptions())
  }

  pluginOptions() {
    return Object.assign(
      this.userOptions.wpPolyfill === false ? {
        requestToExternal(request) {
          if (request === '@babel/runtime/regenerator') {
            return null;
          }
        },
      } : {},
      this.userOptions,
    );
  }

  babelConfig() {
    return {
      presets: ['@wordpress/babel-preset-default'],
    }
  }
}

mix.extend('block', new Block())
mix.extend('blocks', new Block())
