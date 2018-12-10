import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import NewsDetail from './newsDetail.js'
import sxxImg from '../../images/sxxbanner.png'
import * as actionCreators from "../sixuexing/store/actionCreators";
import lodashId from "lodash/uniqueId";

class Sxx extends Component{
    componentDidMount(){
        this.props.getNewsList()
    }

    render() {
        return(
            <div className='sxx-container'>
                <div className="sxx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="sxx-content">
                    <div className="search">
                        <input type="text" placeholder='请输入你想要查找的数据'/>
                        <div className="searchBtn">搜索</div>
                    </div>
                    {/*<NewsDetail />*/}
                    <div className="sxx-box sxx-news">
                        <div className="sxx-title">
                            <span></span>
                            新闻资讯
                        </div>
                        <ul className='news-list'>
                            {this.props.newsList.map((item)=>{
                                return (
                                    <li key={lodashId()} >
                                        <img src={item.image}></img>
                                        <Link to={'/sixuexing/'+item.id}>
                                        <div className="news-content">
                                            <div className="list-title">{item.title}</div>
                                            <div className="description">{item.contentKey.substring(0,100)+'......'}</div>
                                            <div className="time">{item.createTime}</div>
                                        </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="sxx-box sxx-industry">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <div className="industry-content">
                            {this.props.industryList.map((item)=>{
                                return (
                                    <div className="industry-list" key={lodashId()}>
                                        <span></span>
                                        <div className="text">{item.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="sxx-box sxx-student">
                        <div className="sxx-title">
                            <span></span>
                            学员动态
                        </div>
                        <ul className='student-list'>
                            {this.props.studentList.map((item)=>{
                                return (
                                    <li key={lodashId()}>
                                        <div className="box"><img src={item.image} alt=""/></div>
                                        <div className="news-content">
                                            <div className="list-title">{item.title}</div>
                                            <div className="description">{item.content}</div>
                                            <div className="time">{item.createTime}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList
})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(){
        dispatch(actionCreators.getNewsList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sxx))