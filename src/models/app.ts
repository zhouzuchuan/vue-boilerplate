import { defineStore } from 'pinia'
import { serviceList } from '@/plugins/api'

const { serveHome_QueryPackageList } = serviceList

export const useApp_Store = defineStore('app', {
    state: () => ({
        packageList: [[], []] as any[][],
    }),

    actions: {
        async getList() {
            const result = await serveHome_QueryPackageList()
            this.packageList = result
        },
    },
})
