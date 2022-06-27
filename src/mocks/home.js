// const { Random } = require('mockjs')

const {
    DM: {
        api: { apiHome_QueryPackageList },
        relypackageList,
        packageList,

        returnAcition,
    },
} = global

module.exports = {
    [apiHome_QueryPackageList]: (req, res) => {
        returnAcition(res, [packageList, relypackageList])
    },
}
