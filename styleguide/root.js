import store from '../src/plugins/store'
import i18n from '../src/plugins/i18n'

export default previewComponent => {
    // https://vuejs.org/v2/guide/render-function.html
    return {
        store,
        i18n,
        render(createElement) {
            return createElement(previewComponent)
        },
    }
}
