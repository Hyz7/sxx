import * as actionTypes from './actionTypes'

const defaultState={
    courseShow: true
}

const getmenulist=(state,action)=>{
    return Object.assign({},state,{menuLeftList:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_MENU_LIST:
            return getmenulist(state,action)
        default:
            return state
    }
}