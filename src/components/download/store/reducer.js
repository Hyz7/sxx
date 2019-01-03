import * as actionTypes from '../../../store/actionTypes'

const defaultState={
    list:[],
    downloadInfo:{},
    downloadFile:''
}

const getList=(state,action)=>{
    return Object.assign({},state,{list:action.result.dataEntities})
}
const getInfo=(state,action)=>{
    return Object.assign({},state,{downloadInfo:action.result.dataEntities})
}
const getFile=(state,action)=>{
    return Object.assign({},state,{downloadFile:action.result.url})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_DOWNLOAD_LIST:
            return getList(state,action)
        case actionTypes.GET_DOWNLOAD_INFO:
            return getInfo(state,action)
        case actionTypes.GET_DOWNLOAD_FILE:
            return getFile(state,action)

        default:
            return state
    }
}
