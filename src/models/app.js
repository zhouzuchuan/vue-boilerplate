export default ({ serveGetPackageList }) => {
    return {
        namespaced: true,

        state: {
            packageList: [[], []],
        },

        actions: {
            getList: ({ commit }) => {
                serveGetPackageList().then(packageList => {
                    commit('setState', {
                        packageList,
                    })
                })
            },
        },

        mutations: {
            setState: (state, payload) => {
                state.packageList = payload?.packageList
            },
        },
    }
}
