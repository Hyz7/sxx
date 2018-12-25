import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as API from '../../../api'

const createNewsList=(result)=>({
    type:actionTypes.GET_NEWS_LIST,
    result
})
const createDetailInfo=(result)=>({
    type:actionTypes.GET_DETAIL_INFO,
    result
})
const moreList=(result)=>({
    type:actionTypes.GET_MORE_LIST,
    result
})

export const getMoreList=(page,size)=>{
    return (dispatch)=>{
        axios.get(API.GET_MORE_LIST+"?typeId=1&&page="+page+"&&size="+size).then(res=>{
            dispatch(moreList(res.data))
        })
    }
}

export const getNewsList=(value)=>{
    return (dispatch)=>{
        axios.get(API.GET_NEWS_LIST+"?name="+value).then(res=>{
            console.log(res,value)
            dispatch(createNewsList(res.data))
        })
    }
}

export const getDetailInfo=(id)=>{
    return (dispatch)=>{
        axios.get(API.GET_SXX_INFO+'?id='+id).then(res=>{
            dispatch(createDetailInfo(res.data.dynamic))
        })
    }
}