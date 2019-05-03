import {
  autoload,
  registerBlock,
  unregisterBlock,
  beforeUpdateBlocks,
  afterUpdateBlocks,
} from 'block-editor-hmr'

autoload(
  {
    getContext: () =>
      require.context(__dirname + '/blocks', true, /index\.js$/),
    register: registerBlock,
    unregister: unregisterBlock,
    before: beforeUpdateBlocks,
    after: afterUpdateBlocks,
  },
  (context, loadModules) => {
    if (module.hot) {
      module.hot.accept(context.id, loadModules)
    }
  }
)
