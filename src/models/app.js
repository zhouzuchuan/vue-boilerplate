export default ({ serveGetPackageList }) => {
    return {
        namespaced: true,
        state: {
            packageList: [[], []],
        },
        actions: {
            getList: ({ commit }) => {
                serveGetPackageList().then(({ data }) => {
                    commit('setState', {
                        packageList: data.result,
                    })
                })
            },
        },
        mutations: {
            setState: (state, payload) => {
                state.packageList = payload.packageList
            },
        },
    }
}
