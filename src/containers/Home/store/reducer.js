import * as actionTypes from './actionTypes'

const defaultState={
    menuLeftList:[
        {
            title:'网络安全',
            key:'0'
        },
        {
            title:'区块链',
            key:'1'
        },
        {
            title:'人工智能',
            key:'2'
        },
        {
            title:'云计算与大数据',
            key:'3'
        },
        {
            title:'物联网',
            key:'4'
        },
        {
            title:'web前端',
            key:'5'
        },
        {
            title:'编程语言',
            key:'6'
        },
        {
            title:'IT爱好者',
            key:'7'
        },
    ],
    menuLeftShow: true
}

export default (state = defaultState, action)=>{
    switch(action.type){
        default:
            return state
    }
}