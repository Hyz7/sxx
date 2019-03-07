import * as actionTypes from '../actionTypes'
import axios from 'axios'
import * as API from '../../api'

/**
 * 获取所有课程
 * @param result
 * @returns {{type: string, result: *}}
 */
const getList=(result)=>({
    type:actionTypes.GET_ALLCOURSE_LIST,
    result
})

export const getAllCourseList=()=>{
    return (dispatch)=>{
        axios.get(API.GET_ALLCOURSE_LIST).then(res=>{
            dispatch(getList(res.data.courseListDTOList))
        })
    }
}

/**
 * 获取课程详情
 * @param result
 * @returns {Function}
 */
const getDetail=(result)=>({
    type:actionTypes.GET_COURSE_DETAIL_INFO,
    result
})
export const getCourseDetailInfo=(id)=>{
    return (dispatch)=>{
        axios.get(API.GET_COURSE_DETAIL_INFO+'?courseId='+id).then(res=>{
            dispatch(getDetail(res.data.course))
        })
    }
}