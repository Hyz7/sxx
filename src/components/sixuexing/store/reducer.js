import * as actionTypes from './actionTypes'

const defaultState={
    newsList:[],
    industryList:[],
    studentList:[],
    page:1,
    detailInfo:'',
    pageStatus:true
}
/*
 * 在数组中去除重复项（）
 */
Array.prototype.unique1 = function(){
    let emptyObj = {} //创建空对象，用于存放属性
    let result = [] //结果数组，用于存放结果
    for(let i = 0;i<this.length;i++){//this指向调用该方法的数组
        this[i] = JSON.stringify(this[i])//将对象解析为字符串便于比较
        if(!emptyObj[this[i]]){//以emptyObj是否存在该字符串为名的属性进行判断
            emptyObj[this[i]] = 1 //将emptyObj的this[i]属性设为1，便于判断
            result.push(JSON.parse(this[i]))//将字符串重新解析为对象
        }
    }
    return result //返回结果
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
    if(action.result.newsList.length<5){
        return Object.assign({},state,{
            page:state.page+1,
            pageStatus:false,
            newsList: state.newsList.concat(action.result.newsList).unique1()
        })
    }
    return Object.assign({},state,{
        page:state.page+1,
        newsList: state.newsList.concat(action.result.newsList).unique1()
    })
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