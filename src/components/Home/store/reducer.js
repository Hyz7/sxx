import { actionTypes } from './index'

const defaultState={
    teacherList:[],
    bannerList:[]
}

const getList=(state,action)=>{
    return Object.assign({},state,{teacherList:action.result})
}
const getBannerList=(state,action)=>{
    return Object.assign({},state,{bannerList:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_TEACHER_LIST:
            return getList(state,action)
        case actionTypes.GET_HOME_BANNER:
            return getBannerList(state,action)
        default:
            return state
    }
}