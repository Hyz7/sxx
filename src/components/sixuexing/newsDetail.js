import React,{ Component,Fragment } from 'react'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../sixuexing/store/actionCreators'
import lodashId from "lodash/uniqueId";

class NewsDetail extends Component{
    state={
        zanStatus:false
    }

    componentDidMount() {
        this.props.getDetailContent(this.props.location.search.substring(4))
        // this.props.getDetailContent(this.props.match)
        this.node.scrollIntoView();
        this.props.getNewsList()

        /*this.props.getDetailContent(this.props.location.search.substring(4)+1)
        this.props.getDetailContent(this.props.location.search.substring(4)-1)*/
        console.log(parseInt(this.props.location.search.substring(4))+1)
    }

    addZan=()=>{
        this.setState({
            zanStatus:!this.state.zanStatus
        })
    }

    handleChangePage=()=>{
        this.props.getDetailContent(this.props.location.search.substring(4)+1)
    }

    render(){
        let { zanStatus } =this.state
        return(
            <div className='sxx-container' ref={node => this.node = node} >
                <div className="sxx-content">
                    {/*<div className="search">
                        <input type="text" placeholder='请输入你想要查找的数据'/>
                        <div className="searchBtn">搜索</div>
                    </div>*/}
                    <div className='newsDetail-container'>
                            <div className="title">
                                <h1 className="text">{this.props.detailInfo.title}</h1>
                                <div className="time">{this.props.detailInfo.createTime}</div>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html:this.props.detailInfo.content}}></div>
                            <div className={zanStatus?"zan-btn active":"zan-btn"}  onClick={()=>{this.addZan()}}>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-dianzan'></use>
                                </svg>
                                <div className="text" style={{marginLeft:'20px'}}>{zanStatus?"取消":"赞"}</div>
                            </div>

                    </div>
                    <div className="sxx-box sxx-industry">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <div className="industry-content">
                            {this.props.industryList?this.props.industryList.map((item)=>{
                                return (
                                    <div className="industry-list" key={lodashId()}>
                                        <span></span>
                                        <a className="text" href={item.content}>{item.title}</a>
                                    </div>
                                )
                            }):null}
                            {/*<div className="btn-box">
                                <div className="btn prev-btn" onClick={()=>{this.handleChangePage('prev')}}>上一篇：AAA全球应用联盟链白皮书</div>
                                <div className="btn next-btn" onClick={()=>{this.handleChangePage('next')}}>下一篇：SharesPost 项目投资者概览</div>
                            </div>*/}
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