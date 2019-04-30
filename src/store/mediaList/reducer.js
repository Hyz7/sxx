import * as actionTypes from "../actionTypes";

const defaultState={
    mediaList:[],
    mediaDetail:{}
}

const getList=(state,action)=>{
    return Object.assign({},state,{mediaList:action.result})
}
const getDetailList=(state,action)=>{
    return Object.assign({},state,{mediaDetail:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_MEDIA_LIST:
            return getList(state,action)
        case actionTypes.GET_MEDIA_DETAIL:
            return getDetailList(state,action)
        default:
            return state
    }
}