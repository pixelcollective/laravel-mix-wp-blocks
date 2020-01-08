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

  webpackPlugins() {
    const WordPressDependencyExtraction = require('@wordpress/dependency-extraction-webpack-plugin')

    return new WordPressDependencyExtraction()
  }

  babelConfig() {
    return {
      presets: ['@wordpress/babel-preset-default'],
    }
  }
}

mix.extend('block', new Block())
mix.extend('blocks', new Block())
