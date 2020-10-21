/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { text, boolean } from '@storybook/addon-knobs'
import MyButton from './MyButton.vue'

import MD from './readme.md'

storiesOf('按钮', module)
  .add(
    '使用文本',
    () => ({
      components: { MyButton },
      props: {
        disabled: {
          default: boolean('Disabled', false),
        },
        label: {
          default: text('Text', 'Hello Storybook'),
        },
      },
      template: `
            <div>
              <MyButton @click="action">Hello Button</MyButton>
              <MyButton @click="action">Hello Button</MyButton>
            </div>
            `,
      methods: { action: action('clicked') },
    }),
    {
      info: {
        // docsInPanel: false,
      },
      readme: {
        content: '<!-- PROPS -->',
        sidebar: MD,
      },
    }
  )
  .add(
    'with JSX',
    () => ({
      components: { MyButton },
      // eslint-disable-next-line no-unused-vars
      render(h) {
        return <MyButton onClick={this.action}>With JSX</MyButton>
      },
      methods: { action: linkTo('clicked') },
    }),
    {
      info: {},
    }
  )
  .add(
    'with some emoji',
    () => ({
      components: { MyButton },
      template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
      methods: { action: action('clicked') },
    }),
    {
      info: {},
    }
  )

/* eslint-enable react/react-in-jsx-scope */
