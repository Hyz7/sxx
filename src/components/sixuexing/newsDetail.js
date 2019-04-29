import React,{ Component,Fragment } from 'react'
import FloatWin from '../../common/floatWindow'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../sixuexing/store/actionCreators'
import uniqueId from "lodash/uniqueId";
import sxxImg from "../../images/sxxbanner.png";
let array=[]
class NewsDetail extends Component{
    state={
        zanStatus:false
    }

    componentDidMount() {
        this.props.getDetailContent(this.props.location.search.substring(4))
        this.node.scrollIntoView();
        this.props.getNewsList()
        document.documentElement.scrollTop=0
    }

    handleChangePage=(id)=>{
        this.props.getDetailContent(id)
        this.props.history.replace('/sixuexing/detail?id='+id)
    }

    render(){
        return(
            <div className='sxx-container' ref={node => this.node = node} >
                <div className="sxx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <FloatWin />
                <div className="sxx-content">
                    <div className='newsDetail-container'>
                            <div className="title">
                                <h1 className="text">{this.props.detailInfo.title}</h1>
                                <div className="time">{this.props.detailInfo.createTime}</div>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html:this.props.detailInfo.content}}></div>
                    </div>
                    <div className="sxx-box sxx-industry sxx-box1">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <div className="industry-content">
                            {this.props.industryList?this.props.industryList.map((item)=>{
                                return (
                                    <a href={item.url?item.url:null} className="industry-list" key={uniqueId()}>
                                        <span></span>
                                        <div  className="text" >{item.title}</div>
                                    </a>
                                )
                            }):null}

                            {this.props.newsList.map((item,index)=>{
                                if(this.props.location.search.substring(4)==item.id){
                                    return (
                                        <div className="btn-box" key={uniqueId()}>
                                            <div className="btn prev-btn noSelectText" onClick={()=>{this.handleChangePage(this.props.newsList[index-1].id)}}>上一篇：<div>{this.props.newsList[index-1]?this.props.newsList[index-1].title:'无上一篇'}</div></div>
                                            <div className="btn next-btn noSelectText" onClick={()=>{this.handleChangePage(this.props.newsList[index+1].id)}}>下一篇：<div>{this.props.newsList[index+1]?this.props.newsList[index+1].title:'无下一篇'}</div></div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
const mapStateToProps=(state)=>({
    newsList:state.sixuexing.newsList,
    list:state.sixuexing.newsList,
    detailInfo:state.sixuexing.detailInfo,
    industryList:state.sixuexing.industryList,
})
const mapDispatchToProps=(dispatch)=>({
    getDetailContent(id){
        dispatch(actionCreators.getDetailInfo(id))
    },
    getNewsList(){
        dispatch(actionCreators.getNewsList())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NewsDetail))