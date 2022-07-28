const { mock } = require('mockjs')

const {
    apis: { apiHome_QueryPackageList, apiHome_GetTitle },
    sendResult,
} = DM

module.exports = {
    [apiHome_QueryPackageList]: (req, res) => {
        sendResult(res, [
            mock({
                'a|3-6': [
                    {
                        name: '@name',
                        src: '@url',
                    },
                ],
            }).a,
            mock({
                'a|5-13': [
                    {
                        name: '@name',
                        src: '@url',
                    },
                ],
            }).a,
        ])
    },

    [apiHome_GetTitle]: (req, res) => {
        sendResult(res, '@cparagraph')
    },
}
