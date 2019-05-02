const mix = require('laravel-mix')
const mkdirp = require('mkdirp')
const fs = require('fs')
const getDirName = require('path').dirname

class Blocks {
  /**
   * The optional name to be used when called by Mix.
   * Defaults to the class name, lowercased.
   *
   * Ex: mix.example();
   *
   * @return {String|Array}
   */
  name() {
    return 'blocks'
  }

  /**
   * All dependencies that should be installed by Mix.
   *
   * @return {Array}
   */
  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return ['block-editor-hmr', 'classnames', 'prop-types', 'lodash', 'react']
  }

  /**
   * Register the component.
   *
   * When your component is called, all user parameters
   * will be passed to this method.
   *
   * Ex: register(src, output) {}
   * Ex: mix.yourPlugin('src/path', 'output/path');
   *
   * @param  {*} ...params
   * @return {void}
   *
   */
  register(src, output) {
    this.config = {
      src: src ? src : './wp-blocks',
      output: output ? output : './wp-blocks-dist',
      entry: src ? `${src}/blocks.js` : './wp-blocks/blocks.js',
    }
  }

  /**
   * Boot
   */
  boot() {
    mkdirp(getDirName(this.config.entry), err => {
      if (err) console.log(err)
      fs.copyFile(
        __dirname + '/scaffolding/blocks.js',
        this.config.entry,
        err => {
          if (err) console.log(err)
        }
      )
    })
    mix.react(this.config.entry, this.config.output)
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param  {Object} webpackConfig
   * @return {void}
   */
  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      lodash: 'lodash',
      react: 'React',
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
}

mix.extend('blocks', new Blocks())
