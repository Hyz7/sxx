import * as actionTypes from '../../../store/actionTypes'
import axios from 'axios'
import * as API from '../../../api'

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
