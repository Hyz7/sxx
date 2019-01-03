import * as actionTypes from '../../../store/actionTypes'
import axios from 'axios'
import * as Api from '../../../api'
const getList=(result)=>({
    type: actionTypes.GET_DOWNLOAD_LIST,
    result,
})
const getInfo=(result)=>({
    type: actionTypes.GET_DOWNLOAD_INFO,
    result,
})
const getFile=(result)=>({
    type: actionTypes.GET_DOWNLOAD_FILE,
    result,
})

export const getDownloadFile=(id)=>{
    return (dispatch)=>{
        axios.get(Api.GET_DOWNLOAD_FILE+'?dataId='+id).then(res=>{
            dispatch(getFile(res.data))
        })
    }
}
export const getDownloadInfo=(id)=>{
    return (dispatch)=>{
        axios.get(Api.GET_DOWNLOAD_INFO+'?dataId='+id).then(res=>{
            dispatch(getInfo(res.data))
        })
    }
}

export const getDownloadList=()=>{
    return (dispatch)=>{
        axios.get(Api.GET_DOWNLOAD_LIST).then(res=>{
            dispatch(getList(res.data))
        })
    }
}
