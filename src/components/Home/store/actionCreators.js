import * as actionTypes from '../../../store/actionTypes'
import axios from 'axios'
import * as API from '../../../api'
axios.defaults.baseURL='https://sixuexing.com/home'
const getList=(result)=>({
    type:actionTypes.GET_TEACHER_LIST,
    result
})

export const getTeacherList=()=>{
    return (dispatch)=>{
        axios.get(API.GET_TEACHER_LIST).then(res=>{
            dispatch(getList(res.data.teacherDTO))
        })
    }
}



const getBanner=(result)=>({
    type:actionTypes.GET_HOME_BANNER,
    result
})

export const getHomeBanner=()=>{
    return (dispatch)=>{
        axios.get(API.GET_HOME_BANNER).then(res=>{
            dispatch(getBanner(res.data.bannerList))
        })
    }
}