import { configure, addDecorator, addParameters } from '@storybook/vue'
import { themes, create } from '@storybook/theming'

import { setConsoleOptions } from '@storybook/addon-console'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme/vue'

import './readme.config'

const basicTheme = create({
    base: 'light',
    brandTitle: 'README addon',
    brandUrl: 'https://github.com/tuchk4/storybook-readme',
    brandImage: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
})

addParameters({
    options: {
        theme: basicTheme,
    },
})

setConsoleOptions({
    panelExclude: [],
})

addDecorator(withInfo)
addDecorator(addReadme)
addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
