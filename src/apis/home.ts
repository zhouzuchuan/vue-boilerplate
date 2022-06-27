import { ServerParams } from '@/api.config'

export default ({ server }: ServerParams) => ({
    get: {
        apiHome_QueryPackageList: `${server}/getPackageList`,
    },
})
