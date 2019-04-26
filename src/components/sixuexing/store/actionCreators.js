import * as actionTypes from '../../../store/actionTypes'
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
const moreList=(result,page)=>({
    type:actionTypes.GET_MORE_LIST,
    result,
    page
})
const moreIndustryList=(result,page)=>({
    type:actionTypes.GET_MORE_INDUSTRY_LIST,
    result,
    page
})
const industryList=(result)=>({
    type:actionTypes.GET_INDUSTRY_LIST,
    result
})

const studentList=(result)=>({
    type:actionTypes.GET_STUDENT_LIST,
    result
})

export const getTypeList=(id,size,name)=>{
    return (dispatch)=>{
        switch (id) {
            case 2:
                axios.get(API.GET_TYPE_LIST+"?typeId="+id+'&size='+size+"&name="+name).then(res=>{
                    dispatch(industryList(res.data))
                })
                break
            case 3:
                axios.get(API.GET_TYPE_LIST+"?typeId="+id+"&name="+name).then(res=>{
                    dispatch(studentList(res.data))
                })
                break
        }

    }
}

export const handleMoreIndustryList=(id,page,size)=>{
    return (dispatch)=>{
        axios.get(API.GET_TYPE_LIST+"?typeId="+id+"&page="+(page+1)+"&size="+size).then(res=>{
            dispatch(moreIndustryList(res.data,page))
        })
    }
}

export const getMoreList=(page,size)=>{
    return (dispatch)=>{
        axios.get(API.GET_NEWS_LIST+"?page="+page+"&&size="+size).then(res=>{
            dispatch(moreList(res.data,page+1))
        })
    }
}

export const getNewsList=(value)=>{
    return (dispatch)=>{
        axios.get(API.GET_NEWS_LIST+"?name="+value).then(res=>{
            console.log(res)
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
