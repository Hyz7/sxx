import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper';
import connect from "react-redux/es/connect/connect";
import {withRouter,Link} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import * as actionCreators1 from '../sixuexing/store/actionCreators'
import Self from './server/self.js'
import University from './server/university.js'
import Enterprise from './server/enterprise.js'
import Data1 from '../../images/largeData/data1.png'
import Data2 from '../../images/largeData/data2.png'
import Data3 from '../../images/largeData/data3.png'
import DataTitle from '../../images/largeData/datatitle.png'
import { CSSTransition } from 'react-transition-group';
import baomingImg from '../../images/home/baoming.png'
import lodashId from "lodash/uniqueId";
import { message } from 'antd';
import FloatWin from '../../common/floatWindow'
let timer;
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuLeftShow: this.props.menuLeftShow,
            menuRightList: false,
            newsLeft: 1,
            pages:'',
            active:'Data1',
            list: ['Data1','Data2','Data3']
        }
        this.showMenuRight=this.showMenuRight.bind(this)
        this.hideMenuRight=this.hideMenuRight.bind(this)
    }

    showMenuRight(e){
        this.setState({
            menuRightList:true,
        })
    }
    hideMenuRight(){
        this.setState({
            menuRightList:null
        })
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }

    warningMsg=()=>{
        message.warning('课程正在紧急筹备中...')
    }

    componentWillMount(){
        this.props.getNewsList()
    }

    componentDidMount(){

    }
    render() {
        const params = {
            effect: 'fade',
            grabCursor: true,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }
        let {menuLeftShow,menuRightList,newsLeft,pages,active} = this.state
        return(
            <Fragment>
                {/*<Galaxy />*/}
                <FloatWin />
                <div className="nav-menuDown-box">
                    <div className="inner-box" onMouseLeave={this.hideMenuRight}>
                            <CSSTransition
                                in={true}
                                timeout={300}
                                appear={true}
                                classNames="bannerList"
                                unmountOnExit
                            >
                            <div className="nav-menuDown">
                                <div className="box">
                                    <Link to='/qkl' className="item">区块链工程师</Link>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>Javascript ES6</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>Python</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>Swift程序设计</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>新一代网络安全</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>全栈软件测试</div>
                                </div>
                                <div className="box">
                                    <div className="item" onClick={()=>{this.warningMsg()}}>C/C++</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>GO语言</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>大数据</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>云计算</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>AI人工智能</div>
                                    <div className="item" onClick={()=>{this.warningMsg()}}>智能物联网</div>
                                </div>
                            </div></CSSTransition>
                    </div>
                </div>
                <Swiper {...params}>
                    <div><img src={require("../../images/home/banner1.png")} alt="区块链"/></div>
                    <div><img src={require("../../images/home/banner2.png")} alt="区块链"/></div>
                    <div><img src={require("../../images/home/banner3.png")} alt="区块链"/></div>
                </Swiper>
                <div className="home-container">
                    <div className="item1">
                        <div className="item1-position">
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('self')}}>
                                <span className='span1'></span>
                                <div className="list-title">个人</div>
                                <div className="list-text">人才培养</div>
                            </div>
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('university')}}>
                                <span className='span2'></span>
                                <div className="list-title">高校</div>
                                <div className="list-text">技术赋能</div>
                            </div>
                            <div className="item1-list" onClick={()=>{this.handleBoxChange('enterprise')}}>
                                <span className='span3'></span>
                                <div className="list-title">政企</div>
                                <div className="list-text">产业研发</div>
                            </div>
                            <div className="item1-list item-list">
                                <Link to='contactUs' className="item1-list-box">
                                    <i className='img1'></i>来校路线
                                </Link>
                                <a className="item1-list-box fr" onClick={()=>{this.scrollToAnchor('baoming')}}>
                                    <i className='img2'></i>报名流程
                                </a>
                                <Link to='core' className="item1-list-box" style={{marginTop:'4px'}}>
                                    <i className='img3'></i>核心优势
                                </Link>
                                <Link to='sixuexing' className="item1-list-box fr" style={{marginTop:'4px'}}>
                                    <i className='img4'></i>学员故事
                                </Link>
                            </div>
                        </div>
                    </div>
                    {pages==''?
                    <div>
                        {/*<div className="course">
                            <div className="course-position">
                                <div className="title" style={{width:'360px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>0元免费课程</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                                <div className="title-description">知识共享，做真正实用的公开课</div>
                                <div className="course-list">
                                    <Link to='allcourse' className="more-btn">查看更多></Link>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span1'></span>
                                        </div>
                                        <div className="content">
                                            <div className="course-title">私有区块链，我们一起GO</div>
                                            <div className="course-text">用Go语言实现一个区块链私有链</div>
                                            <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span2'></span>
                                        </div>
                                        <div className="content">
                                            <div className="course-title">玩转数据结构 从入门到进阶</div>
                                            <div className="course-text">就看你会不会玩！</div>
                                            <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span3'></span>
                                        </div>
                                        <div className="content">
                                            <div className="course-title">Spring Cloud微服务实战</div>
                                            <div className="course-text">来吧！我们试试实战</div>
                                            <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span4'></span>
                                        </div>
                                        <div className="content">
                                            <div className="course-title">Go语言实战流媒体视频网站</div>
                                            <div className="course-text">用Go语言实践应用</div>
                                            <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                    <div className="list-box">
                                        <div className="span-box">
                                            <span className='span5'></span>
                                        </div>
                                        <div className="content">
                                            <div className="course-title">SVN从入门到放弃</div>
                                            <div className="course-text">入门级课程你敢不敢来</div>
                                            <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                                        </div>
                                    </div>
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                            </div>
                        </div>*/}
                        <div className="largeData">
                            <div className="largeData-position">
                                <div className="title">
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>就业薪资大数据</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="imgTitle">
                                    <img src={DataTitle} alt="区块链"/>
                                </div>
                                <div className="data-content">
                                    <div className="img-box" onMouseOver={()=>{clearInterval(timer)}}>
                                        <img className={active=='Data1'?'active':''} src={Data1} alt="区块链" onClick={()=>{this.handleImgChange('Data1')}}/>
                                        <img className={active=='Data2'?'active':''} src={Data2} alt="区块链" onClick={()=>{this.handleImgChange('Data2')}}/>
                                        <img className={active=='Data3'?'active':''} src={Data3} alt="区块链" onClick={()=>{this.handleImgChange('Data3')}}/>
                                    </div>
                                    <div className="data-description">
                                        中国互联网行业已具规模，并且发展迅猛，行业平均就业薪资高，但专业技术人才供需严重失衡，未来行业的发展亟待复合型及国际化人才的出现。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher">
                            <div className="teacher-position">
                                <div className="title" style={{width:'320px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>师资介绍</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="title-description">顶尖高校教授研发课程，实名行业实战大牛授课</div>
                                <div className="teacher-introduce">
                                    <Link to='teacher' className="more-btn">查看更多></Link>
                                    <div className="introduce-list">
                                        <div className="avatar active1"></div>
                                        <div className="name">张小松</div>
                                        <div className="position">长江学者特聘教授</div>
                                        <div className="content">
                                            电子科技大学博士生导师，国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active2"></div>
                                        <div className="name">桂勋</div>
                                        <div className="position">思学行教务总监</div>
                                        <div className="content">
                                            美国田纳西大学CURENT实验室博士后，电子科技大学教授，思学行教育科技合伙人，国际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                            目前参与科技部重大专项《面向新型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active3"></div>
                                        <div className="name">姚兰</div>
                                        <div className="position">成都信息工程大学副教授</div>
                                        <div className="content">
                                            西南交通大学博士，美国西北理工大学访问学者，成都软件外包业务首批赴美培训专家，长期在成都信息工程大学开设《面向对象程序设计》，《C++程序设计》等课程。研究领域：区块链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。
                                        </div>
                                    </div>
                                    <div className="introduce-list">
                                        <div className="avatar active4"></div>
                                        <div className="name">李维江</div>
                                        <div className="position">斯蒂文斯网络信息工程硕士</div>
                                        <div className="content">
                                            美国斯蒂文斯理工学院网络信息工程硕士，曾就职于美国华尔街大都会通信有限公司，从事金融、数据软件产品开发和运营。曾在通信与信息系统国际会议上成功发表论文《多小区认知无线网络中基于免疫算法的资源分配》。长期参与美国公司实验室区块链应用的研究和实践，熟悉比特币和以太坊的源代码设计及技术开发。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-position">
                                <div className="title" style={{width:'420px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>新闻资讯-区块链</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <h2 className="title-description">一键了解最新区块链大数据行业讯息</h2>
                                <div className="news-box">
                                    <Link to='sixuexing' className="more-btn">查看更多></Link>
                                    <ul className="newsList-box">
                                        <div className="newsItem newsList-item">
                                            <div className="title">
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#icon-xinwen'></use>
                                                </svg>
                                                <div className="title-text">新闻资讯</div>
                                            </div>
                                            <div className="newsItem-content">
                                                <img className="left-box" src={require('../../images/home/tuoyuan.png')}></img>
                                                <ul>
                                                    {this.props.newsList.slice(0,7).map((item)=>{
                                                        return (
                                                            <li key={lodashId()}>
                                                                <Link to={'/sixuexing/detail?id='+item.id} className="content-title">{item.title}</Link>
                                                                <div className="createTime">{item.createTime}</div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="newsItem industryList-item">
                                            <div className="title">
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#icon-link'></use>
                                                </svg>
                                                <div className="title-text">行业动态</div>
                                            </div>
                                            <div className="newsItem-content">
                                                <img className="left-box" src={require('../../images/home/tuoyuan.png')}></img>
                                                <ul>
                                                    {this.props.industryList.slice(0,6).map((item)=>{
                                                        return (
                                                            <li key={lodashId()}>
                                                                <a className="content-title" href={item.content}>{item.title}</a>
                                                                <div className="createTime">{item.createTime}</div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="newsItem studyList-item">
                                            <div className="title">
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#icon-renwu-ren'></use>
                                                </svg>
                                                <div className="title-text">学员动态</div>
                                            </div>
                                            <div className="newsItem-content-study">
                                                {this.props.studentList.slice(0,3).map((item)=>{
                                                    return (
                                                        <li key={lodashId()}>
                                                            <img src={item.image} alt=""/>
                                                            <div className="content-box">
                                                                <div className="content-title">{item.title}</div>
                                                                <div className="desc">{item.content?item.content.length>30?item.content.substring(0,30)+'.....':item.content:null}</div>
                                                                <div className="createTime">{item.createTime}</div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="baoming" id='baoming'>
                            <div className="baoming-position">
                                <div className="title" style={{width:'320px'}}>
                                    <span className='span'><span></span></span>
                                    <div className='text'>报名流程</div>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="baoming-box" style={{marginTop:'40px'}}>
                                    <img src={baomingImg} alt="区块链"/>
                                </div>
                                <h1 className="baoming-btn">
                                    <a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes" style={{color:'#fff'}}>我要报名</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    : pages=='self'?<Self />
                    : pages=='university'?<University />
                    : <Enterprise />
                    }
                </div>
            </Fragment>

        )
    }

    componentWillUnmount(){
        clearInterval(timer)
    }

    handleBoxChange=(value)=>{
        this.setState({pages:value})
    }

    handleNewsChange=(value)=>{
        this.setState({newsLeft:value})
    }

    handleImgChange=(value)=>{
        this.setState({active:value})
    }
}

const mapStateToProps=(state)=>({
    menuList:state.home.menuLeftList,
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList

})

const mapDispatchToProps=(dispatch)=>({
    getMenuList(){
        dispatch(actionCreators.getMenuLeftList())
    },
    getNewsList(id){
        dispatch(actionCreators1.getNewsList(id))
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)))