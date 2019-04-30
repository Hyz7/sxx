let env = process.env.NODE_ENV

const HOST = env === 'production'? 'https://sixuexing.com/home': 'https://sixuexing.com/home'
// http://192.168.0.102:8080
export const GET_MENU_LIST = HOST+'/getTitle'

/**
 * 思学行动态详情页
 * @type {string}
 */
export const GET_SXX_INFO = HOST+'/dynamic/queryDynamic'
/**
 * 获取思学行列表
 * @type {string}
 */
export const GET_NEWS_LIST = HOST+'/dynamic/showNewsInfoList'

/**
 * 根据不同分类id获取新闻分页,学员动态和行业动态的数据
 */
export const GET_TYPE_LIST = HOST+ '/dynamic/showNewsListByTypeId'

/**
 * 获取下载资料列表
 * @type {string}
 */
export const GET_DOWNLOAD_LIST = HOST+'/data/findDataList'
/**
 *获取下载资料详情
 * @type {string}
 */
export const GET_DOWNLOAD_INFO = HOST+'/data/findDataInfoByDataId'
/**
 * 请求下载文件
 * @type {string}
 */
export const GET_DOWNLOAD_FILE = HOST+'/data/downloadData'
/**
 * 获取师资列表
 * @type {string}
 */
export const GET_TEACHER_LIST = HOST+ '/teaching/showTeacherList'
/**
 * 获取所有课程列表
 * @type {string}
 */
export const GET_ALLCOURSE_LIST = HOST+ '/course/queryCourseList'
/**
 * 获取课程详情信息
 * @type {string}
 */
export const GET_COURSE_DETAIL_INFO=HOST+'/course/queryCourseInformationByCourseId'
/**
 * 报名
 * @type {string}
 */
export const SIGN_UP_INFO=HOST+'/studentSignUp'
/**
 * 获取课程目录
 * @type {string}
 */
export const GET_COURSE_CATALOGUE='/course/findTeachplanList'
/**
 *获取banner轮播
 * @type {string}
 */
export const GET_HOME_BANNER='/banner'
/**
 * 获取区块链校园行视频列表
 * @type {string}
 */
export const GET_MEDIA_LIST='/compusTalk'