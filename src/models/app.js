// import { switchMap, map } from 'rxjs/operators'

// export default ({ serveGetPackageList }) => {
//     return {
//         namespace: 'app',
//         state: {
//             // 包列表[已安装的CLI插件, 生态系统]
//             packageList: [[], []],
//         },
//         epics: {
//             getList: epic$ =>
//                 epic$.pipe(
//                     switchMap(() => serveGetPackageList()),
//                     map(({ data }) => {
//                         return {
//                             type: 'app/setState',
//                             payload: {
//                                 packageList: data.result,
//                             },
//                         }
//                     }),
//                 ),
//         },
//         reducers: {
//             setState(state, { payload }) {
//                 state.packageList = payload.packageList
//                 console.log(state, payload)
//                 return state
//                 // return {
//                 //     ...state,
//                 //     ...payload,
//                 // }
//             },
//         },
//     }
// }

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
