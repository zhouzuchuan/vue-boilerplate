import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useApi } from '@/plugins/api'

export const useApp_Store = defineStore('app', () => {
    const { serveHome_QueryPackageList } = useApi()
    const state = reactive({
        packageList: [[], []] as any[][],
    })

    return {
        async getList() {
            const result = await serveHome_QueryPackageList()
            state.packageList = result
        },
    }
})
