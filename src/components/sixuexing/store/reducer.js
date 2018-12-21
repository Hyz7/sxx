import * as actionTypes from './actionTypes'

const defaultState={
    newsList:[],
    industryList:[],
    studentList:[],
    page:1,
    detailInfo:''
}

const getNewsList=(state,action)=>{
    return Object.assign({},state,{
        newsList: action.result.newsList,
        industryList: action.result.industryList,
        studentList: action.result.studentList
    })
}
const getDetailInfo=(state,action)=>{
    return Object.assign({},state,{detailInfo:action.result})
}
const createPage=(state,action)=>{
    return Object.assign({},state,{page:state.page+1})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_NEWS_LIST:
            return getNewsList(state,action)
        case actionTypes.GET_DETAIL_INFO:
            return getDetailInfo(state,action)
        case actionTypes.GET_MORE_LIST:
            return createPage(state,action)
        default:
            return state
    }
}