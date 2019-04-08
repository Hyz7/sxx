import * as actionTypes from "../actionTypes";

const defaultState={
    allCourseList:[],
    courseDetailInfo:[],

}
/**
 * 获取所有课程列表数据
 * @param state
 * @param action
 * @returns {*}
 */
const getList=(state,action)=>{
    return Object.assign({},state,{allCourseList:action.result})
}
/**
 * 获取课程详情信息
 * @param state
 * @param action
 * @returns {*}
 */

const getDetailInfo=(state,action)=>{
    return Object.assign({},state,{courseDetailInfo:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_ALLCOURSE_LIST:
            return getList(state,action)
        case actionTypes.GET_COURSE_DETAIL_INFO:
            return getDetailInfo(state,action)

        default:
            return state
    }
}

