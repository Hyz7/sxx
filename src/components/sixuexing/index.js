import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import sxxImg from '../../images/sxxbanner.png'
import * as actionCreators from "../sixuexing/store/actionCreators";
import lodashId from "lodash/uniqueId";
import FloatWin from '../../common/floatWindow'

class Sxx extends Component{
    state={
        pageStatus:true
    }
    componentDidMount(){
        this.props.handleMoreList(this.props.page,5)
        this.props.getIndustryList(2,10)
        this.props.getIndustryList(3)
        // document.documentElement.scrollTop=0
    }
    delHtmlTag=(str)=>{
        return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
    }
    searchKey=(value)=>{
        if(value){
            let value1=value.replace(/\s+/g,"");
            this.props.getNewsList(value1)
        }

    }

    handleKeyDown=(e)=>{
        if(e.keyCode===13){
            this.searchKey(this.searchInput.value)
        }
    }

    render() {
        return(
            <div className='sxx-container'>
                <FloatWin />
                <div className="sxx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="sxx-content">
                    <div className="search">
                        <input type="text" placeholder='请输入你想要查找的数据' ref={value=>this.searchInput=value} onKeyUp={(e)=>{this.handleKeyDown(e)}}/>
                        <div className="searchBtn" onClick={()=>{
                            this.searchKey(this.searchInput.value)
                        }}>搜索</div>
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
                                    <li key={lodashId()}>
                                        <img src={item.image}></img>
                                        <Link to={'/sixuexing/detail?id='+item.id}>
                                        <div className="news-content">
                                            <div className="list-title">{item.title}</div>
                                            <div className="description" dangerouslySetInnerHTML={{__html:this.delHtmlTag(item.content).substring(0,100)+'......'}}></div>
                                            <div className="time">{item.createTime}</div>
                                        </div>
                                        </Link>
                                    </li>
                                )
                            })}
                            {this.props.pageStatus?
                                <div className="loading-more" onClick={()=>{this.props.handleMoreList(this.props.page,5)}}>加载更多......</div>
                                :
                                <div className="loading-more" >没有更多数据了！</div>}

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
                                        <a className="text" href={item.url}>{item.title}</a>
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
                                        <Link to={'/sixuexing/detail?id='+item.id} className="news-content">
                                            <div className="list-title">{item.title}</div>
                                            <div className="description">{item.content}</div>
                                            <div className="time">{item.createTime}</div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    /*handleMoreList=(page,size)=>{

    }*/
}

const mapStateToProps=(state)=>({
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList,
    page:state.sixuexing.page,
    pageStatus:state.sixuexing.pageStatus
})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(value){
        dispatch(actionCreators.getNewsList(value))
    },
    handleMoreList(page,size){
        dispatch(actionCreators.getMoreList(page,size))
    },
    getIndustryList(id,size){
        dispatch(actionCreators.getTypeList(id,size))
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sxx))