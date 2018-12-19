let env = process.env.NODE_ENV

const HOST = env === 'production'? 'http://52.83.225.97:30000' : 'http://52.83.225.97:30000'
// http://192.168.0.102:8080
export const GET_MENU_LIST = HOST+'/getTitle'

/**
 * 思学行动态详情页
 * @type {string}
 */
export const GET_SXX_INFO=HOST+'/dynamic/queryDynamic'
/**
 * 获取思学行列表
 * @type {string}
 */
export const GET_NEWS_LIST=HOST+'/dynamic/showNewsInfoList'