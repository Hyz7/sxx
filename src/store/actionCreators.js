import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as API from '../api/index'

const getmedialist=(result)=>({
    type:actionTypes.GET_MEDIA_LIST,
    result
})
const getmediadetail=(result)=>({
    type:actionTypes.GET_MEDIA_DETAIL,
    result
})
export const getMediaList=(id)=>{
    if(id){
        return (dispatch)=>{
            axios.get(API.GET_MEDIA_LIST+'/'+id).then(res=>{
                dispatch(getmediadetail(res.data.compusTalkDTO))
            })
        }
    }
    return (dispatch)=>{
        axios.get(API.GET_MEDIA_LIST).then(res=>{
            dispatch(getmedialist(res.data.compusTalkListDTOS))
        })
    }
}
