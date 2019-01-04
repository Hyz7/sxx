import React,{ Component,Fragment } from 'react'
import FloatWin from '../../common/floatWindow'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../sixuexing/store/actionCreators'
import uniqueId from "lodash/uniqueId";
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
                <FloatWin />
                <div className="sxx-content">
                    <div className='newsDetail-container'>
                            <div className="title">
                                <h1 className="text">{this.props.detailInfo.title}</h1>
                                <div className="time">{this.props.detailInfo.createTime}</div>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html:this.props.detailInfo.content}}></div>
                    </div>
                    <div className="sxx-box sxx-industry">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <div className="industry-content">
                            {this.props.industryList?this.props.industryList.map((item)=>{
                                console.log(this.props.industryList)
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
                    {/*<div className="sxx-box sxx-student">
                        <div className="sxx-title">
                            <span></span>
                            学员动态
                        </div>
                        <ul className='student-list'>
                            <li>
                                <div className="box"><img src={cansai} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">区块链课程学员参赛</div>
                                    <div className="description">桂勋老师带领学员参加由工信部指导的“首届全国区块链开发大赛”并荣获二等奖</div>
                                    <div className="time">2018-9-28</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={huang} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">“区块链体验课“学员采访</div>
                                    <div className="description">黄同学：试过，才知道自己有多厉害！！</div>
                                    <div className="time">2018-9-10</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={erdengjiang} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">区块链开发大赛二等奖</div>
                                    <div className="description">学员的努力和汗水！</div>
                                    <div className="time">2018-9-28</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={third} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">“区块链体验课“顺利开展</div>
                                    <div className="description">区块链第一课，在天府新谷顺利开展</div>
                                    <div className="time">2018-9-10</div>
                                </div>
                            </li>
                        </ul>
                    </div>*/}
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