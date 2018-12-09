import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as Api from '../../../api'

const createNewsList=(result)=>({
    type:actionTypes.GET_NEWS_LIST,
    result
})
const createDetailInfo=(result)=>({
    type:actionTypes.GET_DETAIL_INFO,
    result
})

export const getNewsList=()=>{
    return (dispatch)=>{
        axios.get('/api/newsList.json').then(res=>{
            dispatch(createNewsList(res.data.data.newsList))
        })
    }
}
export const getDetailInfo=(id)=>{
    return (dispatch)=>{
        axios.get('/api/newsDetail.json?id='+id).then(res=>{
            dispatch(createDetailInfo(res.data.data.list))
        })
    }
}