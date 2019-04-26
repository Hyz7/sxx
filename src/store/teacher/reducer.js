import * as actionTypes  from '../actionTypes'

const defaultState={
    teacherList:[]
}

const getList=(state,action)=>{
    return Object.assign({},state,{teacherList:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_TEACHER_LIST:
            return getList(state,action)
        default:
            return state
    }
}