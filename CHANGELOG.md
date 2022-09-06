# Changelog

## 1.2.0 Sept 5, 2022

- [fix: update for >=6.0.43](https://github.com/pixelcollective/laravel-mix-wp-blocks/pull/7) by [@joshuafredrickson](https://github.com/joshuafredrickson)

## 1.1.0 May 24th, 2020

### Added

- Exposes the underlying `@wordpress/dependency-extraction-webpack-plugin` options.
- Provides an additional option: `disableRegenerator` to stop WP from polyfilling `babel/runtime/regenerator`.

## 1.0.0 January 8th, 2020

- Publishing as an org scoped package on npm.
- Update README.

## 0.2.0 July 10th, 2019

### Changed

- Replaced custom webpack externals with mainline `@wordpress/dependency-extraction-webpack-plugin`.
