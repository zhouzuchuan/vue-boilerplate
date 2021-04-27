/**
 * 加载所有
 *
 * @param {*} context
 */
export const requireAll = (context) => context.keys().map(context)

/**
 * 可选链
 * @param obj
 * @param rest
 * @returns {*}
 */
export const optionalChaining = (obj, ...rest) => {
  let tmp = obj
  for (let key of rest) {
    tmp = tmp?.[rest[key]]
  }
  return tmp || ''
}
