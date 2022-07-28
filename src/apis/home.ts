import { ServerParams } from '@/api.config'

export default ({ server }: ServerParams) => ({
    get: {
        // 查询 包列表
        apiHome_QueryPackageList: `${server}/getPackageList`,

        // 获取 标题
        apiHome_GetTitle: `${server}/get/title/:id/:platform`,
    },
})
