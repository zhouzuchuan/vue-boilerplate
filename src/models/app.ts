import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { useApi } from '@/plugins/api'

export const useApp_Store = defineStore('app', () => {
    const { serveHome_QueryPackageList, serveHome_GetTitle } = useApi()

    const state = reactive({
        packageList: [[], []] as any[][],

        title: '',
    })

    return {
        ...toRefs(state),
        async requestInit() {
            const [titleResult, packageResult] = await Promise.all([
                serveHome_GetTitle(
                    {
                        userId: 1024,
                    },
                    {
                        tplData: {
                            id: 9527,
                            platform: 'Vue',
                        },
                    }
                ),
                serveHome_QueryPackageList({
                    userId: 1024,
                }),
            ])

            state.packageList = packageResult
            state.title = titleResult
        },
    }
})
