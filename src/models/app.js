export default ({ serveHome_QueryPackageList }) => {
  return {
    namespaced: true,

    state: {
      packageList: [[], []],
    },

    actions: {
      getList: ({ commit }) => {
        serveHome_QueryPackageList().then((packageList) => {
          commit('setState', {
            packageList,
          })
        })
      },
    },

    mutations: {
      setState: (state, payload) => {
        Object.entries(payload).forEach(([key, value]) => {
          Reflect.set(state, key, value)
        })
      },
    },
  }
}
