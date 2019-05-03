import {__} from '@wordpress/i18n'
import {TextControl} from '@wordpress/components'

export const name = 'sage/block-a'

export const options = {
  title: __('Block A', 'sage'),
  description: __('Hmm', 'sage'),
  category: 'common',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  edit: ({attributes, setAttributes}) => {
    const updateFieldValue = val => {
      setAttributes({content: val})
    }
    return (
      <TextControl
        label="My Text Field"
        value={attributes.content}
        onChange={updateFieldValue}
      />
    )
  },
  save: ({attributes}) => {
    return <p> {attributes.content} </p>
  },
}
