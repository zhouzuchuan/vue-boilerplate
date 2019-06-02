import { configureReadme, addFooter, addHeader } from 'storybook-readme'

configureReadme({
    codeTheme: 'github',
    header: `
### Vue boilerplate
---
`,

    HeaderPreview: {
        data() {
            return {
                styles: {
                    padding: '20px',
                    margin: '0 0 32px 0',
                    color: '#Fff',
                    background: '#333',
                },
            }
        },
        template: '<div v-bind:style="styles"><slot></slot></div>',
    },
    StoryPreview: {
        data() {
            return {
                styles: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '32px 0',
                    border: '2px dashed #eee',
                    padding: '16px',
                },
            }
        },
        template: '<div v-bind:style="styles"><slot></slot></div>',
    },
    DocPreview: {
        data() {
            return {
                styles: {
                    padding: '8px 32px',
                    margin: '0 0 0 32px',
                    borderLeft: '4px dashed #eee',
                },
            }
        },
        template: '<div v-bind:style="styles"><slot></slot></div>',
    },
    FooterPreview: {
        data() {
            return {
                styles: {
                    margin: '32px 0 0 0',
                    background: 'rgba(171, 255, 176, 1)',
                },
            }
        },
        template: '<div v-bind:style="styles"><slot></slot></div>',
    },
})
