import * as actionTypes from './actionTypes'

const defaultState={
    newsList:[],
    list:[]
}

const getNewsList=(state,action)=>{
    return Object.assign({},state,{newsList:action.result})
}
const getDetailInfo=(state,action)=>{
    return Object.assign({},state,{list:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_NEWS_LIST:
            return getNewsList(state,action)
        case actionTypes.GET_DETAIL_INFO:
            return getDetailInfo(state,action)
        default:
            return state
    }
}