const mix = require('laravel-mix')
const JavaScript = require('laravel-mix/src/components/JavaScript')
const DependencyExtractionPlugin = require('@wordpress/dependency-extraction-webpack-plugin')

/**
 * Laravel Mix WP Block
 *
 * @see https://laravel-mix.com/docs/5.0/extending-mix
 * @see https://www.npmjs.com/package/@wordpress/dependency-extraction-webpack-plugin
 */
class Block extends JavaScript {
  name() {
    return ['blocks', 'block']
  }
  /**
   * All dependencies that should be installed by Mix.
   *
   * @return {array}
   */
  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return [
      '@wordpress/babel-preset-default',
      '@wordpress/dependency-extraction-webpack-plugin',
    ]
  }

  /**
   * Register the plugin component.
   *
   * @param  {string} entry
   * @param  {string} output
   * @param  {object} options
   * @return {void}
   */
  register(entry, output, options = {}) {
    this.pluginOptions = (
      options.disableRegenerator === true ? {
        ...options,
        requestToExternal: function(request) {
          if (request === '@babel/runtime/regenerator') {
            return null
          }
        },
      } : options
    )

    super.register(entry, output)
  }

  /**
   * Plugins to be merged with the master webpack config.
   *
   * @return {array|object}
   */
  webpackPlugins() {
    return new DependencyExtractionPlugin({
      ...this.pluginOptions,
    })
  }

  /**
   * Babel config to be merged with the master Babel config.
   *
   * @return {object}
   */
  babelConfig() {
    return {
      presets: ['@wordpress/babel-preset-default'],
    }
  }
}

mix.extend('block', new Block())
mix.extend('blocks', new Block())
