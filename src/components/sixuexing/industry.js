import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import sxxImg from '../../images/sxxbanner.png'
import * as actionCreators from "../sixuexing/store/actionCreators";
import lodashId from "lodash/uniqueId";
import FloatWin from '../../common/floatWindow'

class Industry extends Component{
    state={
        industryPageStatus:true
    }
    componentDidMount(){
        this.props.getNewsList()
        this.props.getTypeList(2,5)
        this.props.getTypeList(3)
    }

    searchKey=(value)=>{
        if(value){
            let value1=value.replace(/\s+/g,"");
            this.props.getTypeList(2,'',value1)
        }

    }

    handleKeyDown=(e)=>{
        if(e.keyCode===13){
            this.searchKey(this.searchInput.value)
        }
    }
    delHtmlTag=(str)=>{
        return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
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
                    <div className="sxx-box sxx-news">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <ul className='news-list'>
                            {this.props.industryList.map((item)=>{
                                return (
                                    <li key={lodashId()}>
                                        <img src={item.image}></img>
                                        <a href={item.url?item.url:null}>
                                            <div className="news-content">
                                                <div className="list-title">{item.title}</div>
                                                <div className="description" dangerouslySetInnerHTML={{__html:item.content?item.content.substring(0,100)+'......':null}}></div>
                                                <div className="time">{item.createTime}</div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })}
                            {this.props.industryPageStatus?
                                <div className="loading-more" onClick={()=>{this.props.handleMoreIndustryList(2,this.props.industryPage,5)}}>加载更多......</div>
                                :
                                <div className="loading-more" >没有更多数据了！</div>
                            }
                        </ul>
                    </div>
                    <div className="sxx-box sxx-industry">
                        <div className="sxx-title">
                            <span></span>
                            新闻资讯
                        </div>
                        <div className="industry-content">
                            {this.props.newsList.map((item)=>{
                                return (
                                    <div className="industry-list" key={lodashId()}>
                                        <span></span>
                                        <Link to={'/sixuexing/detail?id='+item.id} className="text">{item.title}</Link>
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
                                            <div className="description" dangerouslySetInnerHTML={{__html:this.delHtmlTag(item.content).substring(0,100)+'......'}}></div>
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
}

const mapStateToProps=(state)=>({
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList,
    industryPage:state.sixuexing.industryPage,
    industryPageStatus:state.sixuexing.industryPageStatus
})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(value){
        dispatch(actionCreators.getNewsList(value))
    },
    handleMoreIndustryList(id,page,size){
        dispatch(actionCreators.handleMoreIndustryList(id,page,size))
    },
    getTypeList(id,size,name){
        dispatch(actionCreators.getTypeList(id,size,name))
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Industry))