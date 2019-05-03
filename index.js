const mix = require('laravel-mix')
class Blocks {
  /**
   * Dependencies management
   */
  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return [
      '@wordpress/babel-preset-default',
      'babel-plugin-inline-json-import',
      'block-editor-hmr',
      'classnames',
      'prop-types',
      'lodash',
    ]
  }

  /**
   * Webpack config
   */
  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      'react-dom': 'ReactDOM',
      '@wordpress/blocks': 'wp.blocks',
      '@wordpress/components': 'wp.components',
      '@wordpress/compose': 'wp.compose',
      '@wordpress/data': 'wp.data',
      '@wordpress/date': 'wp.date',
      '@wordpress/editor': 'wp.editor',
      '@wordpress/element': 'wp.element',
      '@wordpress/hooks': 'wp.hooks',
      '@wordpress/i18n': 'wp.i18n',
      '@wordpress/plugins': 'wp.plugins',
      '@wordpress/blob': 'wp.blob',
      '@wordpress/api-fetch': 'wp.apiFetch',
      '@wordpress/url': 'wp.url',
      '@wordpress/block-editor': 'wp.block-editor',
      '@wordpress/keycodes': 'wp.keycodes',
      '@wordpress/html-entities': 'wp.htmlEntities',
    }
  }

  /**
   * Bagel config
   */
  babelConfig() {
    return {
      presets: ['@wordpress/babel-preset-default'],
      plugins: ['babel-plugin-inline-json-import'],
    }
  }
}

mix.extend('blocks', new Blocks())
