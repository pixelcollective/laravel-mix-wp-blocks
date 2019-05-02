import {
  autoload,
  registerBlock,
  unregisterBlock,
  beforeUpdateBlocks,
  afterUpdateBlocks,
} from 'block-editor-hmr'

autoload(
  {
    getContext: () => require.context('./blocks', true, /index\.js$/),
    register: registerBlock,
    unregister: unregisterBlock,
    before: beforeUpdateBlocks,
    after: afterUpdateBlocks,
  },
  (context, loadModules) => {
    module.hot && module.hot.accept(context.id, loadModules)
  }
)

/**
 * In ./blocks/block-a.js:
 * export const name = 'myplugin/block-a'
 * export const options = {
 *   title: 'Block A',
 *   description: 'An excellent example block',
 *   // icon, category, attributes, edit, save, etcetera
 * }
 */
