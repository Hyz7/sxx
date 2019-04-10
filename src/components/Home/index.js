import React,{Component,Fragment} from 'react'
import Slider from '../../common/myswiper/slider'
import connect from "react-redux/es/connect/connect";
import { withRouter, Link } from 'react-router-dom'
import Self from './server/self.js'
import University from './server/university.js'
import Enterprise from './server/enterprise.js'
import '../../../src/common/icons/iconfont'
import lodashId from "lodash/uniqueId";
import { message } from 'antd';
import FloatWin from '../../common/floatWindow'

import SignUp from '../../common/floatWindow/signUp'
import * as actionCreators from "../../store/allCourse/actionCreators";
import * as actionCreators1 from '../sixuexing/store/actionCreators'
import * as actionCreators2 from '../Home/store/actionCreators'

import bluebg from '../../images/home/bluebg.png'
import salary from '../../images/home/salary.png'
import field from '../../images/home/field.png'
import teacherbg from '../../images/home/Clip.png'

let timer;
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuRightList: false,
            newsLeft: 1,
            pages:''
        }
        this.showMenuRight=this.showMenuRight.bind(this)
        this.hideMenuRight=this.hideMenuRight.bind(this)
    }

    showMenuRight(){
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
        this.props.getAllCourse()
    }

    componentDidMount(){
        this.props.getHomeBanner()
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
                el: '.swiper-pagination',
                clickable: true
            },
            onClick:()=>{

            }
        }
        const params1 = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            slideNextClass:'active-swiper-data'
        }

        let {pages,active} = this.state
        return(
            <Fragment>

                <div className="home-container">
                    <FloatWin />
                    {/*<SignUp />*/}
                    <div className="banner-container-box">
                        <Slider
                            items={this.props.bannerList}
                            speed={1}
                            delay={3}
                            pause={true}
                            autoplay={true}
                            dots={true}
                        />
                        <div className="menu-box">
                            <div className="menu-title">热门课程</div>
                            <ul className='course-name'>
                                <h1><Link to={'/qklpxb'}>区块链项目实战班</Link><span></span></h1>
                                <h1>区块链全栈工程师<span></span></h1>
                                <h1>区块链商学院</h1>
                                <h1>数字资产量化投资</h1>
                                <h1>ACM信息奥数</h1>
                                <h1>区块链实训</h1>
                            </ul>
                        </div>
                    </div>

                    <div className="item1">
                        <div className="item1-position">
                                <div className="item1-list" onClick={()=>{this.handleBoxChange('self')}}>
                                    <span className='span1'></span>
                                    <div className="list-title">就业培训</div>
                                    {/*<div className="list-text">人才培养</div>*/}
                                    <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>
                                </div>
                                <div className="item1-list" onClick={()=>{this.handleBoxChange('university')}}>
                                    <span className='span2'></span>
                                    <div className="list-title">实训基地</div>
                                    {/*<div className="list-text">技术赋能</div>*/}
                                    <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>
                                </div>


                                <div className="item1-list" onClick={()=>{this.handleBoxChange('enterprise')}}>
                                    <span className='span3'></span>
                                    <div className="list-title">人才培养</div>
                                    {/*<div className="list-text">产业研发</div>*/}
                                    <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>
                                </div>


                                <div className="item1-list item-list">
                                    <Link to='aboutUs' className="item1-list-box">
                                        <i className='img1'></i>来校路线
                                    </Link>
                                    <a className="item1-list-box fr" onClick={()=>{this.scrollToAnchor('baoming')}}>
                                        <i className='img2'></i>报名流程
                                    </a>
                                    <Link to='core' className="item1-list-box" style={{marginTop:'4px'}}>
                                        <i className='img3'></i>核心优势
                                    </Link>
                                    <Link to='sixuexing/student' className="item1-list-box fr" style={{marginTop:'4px'}}>
                                        <i className='img4'></i>学员故事
                                    </Link>
                                </div>

                        </div>
                    </div>
                    {pages==''?
                    <div>
                        <div className="course">
                            <div className="course-position">
                                <div className="title">
                                    {/*<span className='span'><span></span></span>*/}
                                    <h1 className='text'>免费课程</h1>
                                    {/*<span className='span'><span></span></span>*/}
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                                {/*<div className="title-description">知识共享，做真正实用的公开课</div>*/}
                                <div className="course-list">
                                    <Link to='allcourse' className="more-btn">查看更多></Link>
                                    {this.props.allCourseList?this.props.allCourseList.map(item=>{
                                        return (
                                            <Link to={'/courseDetail/'+item.courseId} className="list-box" key={lodashId()}>
                                                <div className="span-box">
                                                    <img src={item.courseImage} className='img'/>
                                                    <span>限时特惠</span>
                                                </div>
                                                <div className="content">
                                                    <div className="course-title">{item.courseTitle}</div>
                                                    <div className="course-text">{item.courseSubTitle}</div>
                                                    <div className="price"><span>￥{item.courseActivityPrice} 免费</span><s>原价￥{item.courseOriginalPrice}</s></div>
                                                </div>
                                            </Link>
                                        )
                                    }):null}
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                            </div>
                        </div>
                        <div className="hot">
                            <img src={bluebg} alt=""/>
                            <h1>区块链热度攀升，市场薪资居高不下</h1>
                            <div className="data-box">
                                <img src={salary} alt=""/>
                                <img src={field} alt=""/>
                            </div>
                        </div>
                        <div className="training">
                            <div className="train-title">区块链实训项目</div>
                            <div className="train-desc">所有实训项目均拥有全套代码及成熟技术团队体系支持</div>
                            <div className="train-content">
                                <div className="list">
                                    <div className="img img1"></div>
                                    <div className="text">区块链能源</div>
                                </div>
                                <div className="list">
                                    <div className="img img2"></div>
                                    <div className="text">区块链知识资产</div>
                                </div>
                                <div className="list">
                                    <div className="img img3"></div>
                                    <div className="text">区块链游戏</div>
                                </div>
                                <div className="list">
                                    <div className="img img4"></div>
                                    <div className="text">区块链银行证券</div>
                                </div>
                                <div className="list">
                                    <div className="img img5"></div>
                                    <div className="text">区块链钱包应用交易所</div>
                                </div>
                                <div className="list">
                                    <div className="img img6"></div>
                                    <div className="text">区块链景区</div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher">
                            <img src={teacherbg} alt="区块链"/>
                            <div className="teacher-content">
                                <div className="teacherImg"></div>
                                <div className="teacher-desc">
                                    <div className="teacher-title-box">
                                        <div className="teacher-title">桂勋</div>
                                        <span>|</span>
                                        <div className="position">课程讲师</div>
                                    </div>
                                    <div className="text-content">
                                        <div className="text" style={{marginTop:'15px'}}>电子科技大学副教授</div>
                                        <div className="text">美国田纳西大学CURENT实验室博士后</div>
                                        <div className="text" style={{margin:'30px 0 40px 0'}}>长期从事能源和军工领域内复杂软件系统和实时服务器软件设计，具备实时系统 和并行系统设计的丰富经验;在电子科技大学首开32学时的《区块链技术及其应用》课 程。</div>
                                        <div className="text">曾以“能源互联网区块链项目”，荣获工信部指导，国家电子标准研究院主 办的《首届全国区块链开发大赛》全国二等奖；目前参与科技部重大专项《面向新 型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。为国 际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。</div>
                                        <Link to={'/teacher'} className="more-teacher">更多讲师 >></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="cooperation">
                            <div className="coop-title">合作校企</div>
                            <div className="coop-content">
                                <div className="img img1">百度超级链成都超级节点</div>
                                <div className="img img2">中国管理科学研究所新兴经济研究所
                                    <br/>通证经济商学院成都分院</div>
                                <div className="img img3">亚马逊云计算人才培训基地</div>
                                <div className="img img4">香港城市大学成都研究院实训基地</div>
                                <div className="img img5">EC机器人俱乐部</div>
                                <div className="img img6">黑镜区块链安全实验室</div>
                            </div>
                        </div>
                        {/*<div className="largeData">
                            <div className="largeData-position">
                                <div className="title" style={{width:'340px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>就业薪资大数据</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <s style={{display:'block',clear:'both',height:'0'}}></s>
                                <div className="imgTitle">
                                    <img src={DataTitle} alt="区块链"/>
                                </div>
                                <div className="data-content">
                                    <div className="img-box" onMouseOver={()=>{clearInterval(timer)}}>
                                        <Swiper {...params1} >
                                            <div><img src={Data1} alt="区块链"/></div>
                                            <div><img src={Data2} alt="区块链"/></div>
                                            <div><img src={Data3} alt="区块链"/></div>
                                        </Swiper>
                                        <MySwiper params={params1}/>
                                    </div>
                                    <div className="data-description">
                                        中国互联网行业已具规模，并且发展迅猛，行业平均就业薪资高，但专业技术人才供需严重失衡，未来行业的发展亟待复合型及国际化人才的出现。
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="teacher">
                            <div className="teacher-position">
                                <div className="title" style={{width:'240px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>师资介绍</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <s style={{display:'block',clear:'both',height:'0'}}></s>
                                <div className="title-description">顶尖高校教授研发课程，实名行业实战大牛授课</div>
                                <div className="teacher-introduce">
                                    <Link to='teacher' className="more-btn">查看更多></Link>
                                    <MyWOW style={{}} className='wow bounceInLeft' delay="300ms" >
                                        <div className="introduce-list">
                                            <div className="inner-box1">
                                                <div className="avatar active1"></div>
                                                <div className="name">张小松</div>
                                                <div className="position">长江学者特聘教授</div>
                                                <div className="content">
                                                    电子科技大学博士生导师，国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。
                                                </div>
                                            </div>
                                            <div className="inner-box2">
                                                <div className="t1">张小松</div>
                                                <div className="t2">长江学者特聘教授</div>
                                                <div className="t3"></div>
                                                <div className="t4">
                                                    电子科技大学博士生导师，国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。
                                                </div>
                                            </div>
                                            <div className="inner-box3"></div>
                                        </div>
                                        <div className="introduce-list">
                                            <div className="inner-box1">
                                                <div className="avatar active2"></div>
                                                <div className="name">桂勋</div>
                                                <div className="position">思学行教务总监</div>
                                                <div className="content">
                                                    美国田纳西大学CURENT实验室博士后，电子科技大学教授，思学行教育科技合伙人，国际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                                    目前参与科技部重大专项《面向新型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。
                                                </div>
                                            </div>
                                            <div className="inner-box2">
                                                <div className="t1">桂勋</div>
                                                <div className="t2">思学行教务总监</div>
                                                <div className="t3"></div>
                                                <div className="t4">
                                                    美国田纳西大学CURENT实验室博士后，电子科技大学教授，思学行教育科技合伙人，国际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                                    目前参与科技部重大专项《面向新型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。
                                                </div>
                                            </div>
                                            <div className="inner-box3"></div>
                                        </div>
                                    </MyWOW>
                                    <MyWOW  className='wow bounceInRight' delay="300ms">
                                        <div className="introduce-list">
                                            <div className="inner-box1">
                                                <div className="avatar active3"></div>
                                                <div className="name">姚兰</div>
                                                <div className="position">成都信息工程大学副教授</div>
                                                <div className="content">
                                                    西南交通大学博士，美国西北理工大学访问学者，成都软
                                                    件外包业务首批赴美培训专家，长期在成都信息工程大学
                                                    开设《面向对象程序设计》，《C++程序设计》等课程。研
                                                    究领域：区块链+人工智能，在区块链+人工智能领域发表论
                                                    文10多篇检索论文。
                                                </div>
                                            </div>
                                            <div className="inner-box2">
                                                <div className="t1">姚兰</div>
                                                <div className="t2">成都信息工程大学副教授</div>
                                                <div className="t3"></div>
                                                <div className="t4">
                                                    西南交通大学博士，美国西北理工大学访问学者，成都软件外
                                                    包业务首批赴美培训专家，长期在成都信息工程大学开设《面
                                                    向对象程序设计》，《C++程序设计》等课程。研究领域：区块
                                                    链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。
                                                </div>
                                            </div>
                                            <div className="inner-box3"></div>
                                        </div>
                                        <div className="introduce-list">
                                            <div className="inner-box1">
                                                <div className="avatar active4"></div>
                                                <div className="name">李维江</div>
                                                <div className="position">斯蒂文斯网络信息工程硕士</div>
                                                <div className="content">
                                                    美国斯蒂文斯理工学院网络信息工程硕士，曾就职于美国华尔
                                                    街大都会通信有限公司，从事金融、数据软件产品开发和运营。
                                                    曾在通信与信息系统国际会议上成功发表论文《多小区认知无线
                                                    网络中基于免疫算法的资源分配》。长期参与美国公司实验室区
                                                    块链应用的研究和实践，熟悉比特币和以太坊的源代码设计及技
                                                    术开发。

                                                </div>
                                            </div>
                                            <div className="inner-box2">
                                                <div className="t1">李维江</div>
                                                <div className="t2">斯蒂文斯网络信息工程硕士</div>
                                                <div className="t3"></div>
                                                <div className="t4">
                                                    美国斯蒂文斯理工学院网络信息工程硕士，曾就职于美国华尔
                                                    街大都会通信有限公司，从事金融、数据软件产品开发和运营。
                                                    曾在通信与信息系统国际会议上成功发表论文《多小区认知无线
                                                    网络中基于免疫算法的资源分配》。长期参与美国公司实验室区
                                                    块链应用的研究和实践，熟悉比特币和以太坊的源代码设计及技
                                                    术开发。
                                                </div>
                                            </div>
                                            <div className="inner-box3"></div>
                                        </div>
                                    </MyWOW>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="news">
                            <div className="news-position">
                                <div className="title" style={{width:'240px'}}>
                                    <span className='span'><span></span></span>
                                    <h1 className='text'>新闻资讯</h1>
                                    <span className='span'><span></span></span>
                                </div>
                                <s style={{display:'block',clear:'both',height:'0'}}></s>
                                <div className="title-description">一键了解最新区块链大数据行业讯息</div>
                                <div className="news-box">
                                    <Link to='sixuexing' className="more-btn">查看更多></Link>
                                    <ul className="newsList-box">
                                        <div className="newsItem newsList-item">
                                            <div className="news-title">
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
                                            <div className="news-title">
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
                                                                <a className="content-title" href={item.url}>{item.title}</a>
                                                                <div className="createTime">{item.createTime}</div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="newsItem studyList-item">
                                            <div className="news-title">
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
                                                            <Link to={'/sixuexing/detail?id='+item.id}  className="content-box">
                                                                <div className="content-title">{item.title}</div>
                                                                <div className="desc">{item.content?item.content.length>30?item.content.substring(0,30)+'.....':item.content:null}</div>
                                                                <div className="createTime">{item.createTime}</div>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="baoming" id='baoming'>
                            <div className="baoming-position">
                                <div className="title" style={{width:'240px'}}>
                                    <span className='span'><span></span></span>
                                    <div className='text'>报名流程</div>
                                    <span className='span'><span></span></span>
                                </div>
                                <div className="baoming-box" style={{marginTop:'40px'}}>
                                    <img src={baomingImg} alt="区块链"/>
                                </div>
                                <h1 className="baoming-btn">
                                    <a style={{color:'#fff'}} target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        我要报名
                                    </a>
                                </h1>
                            </div>
                        </div>*/}
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
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList,
    allCourseList:state.course.allCourseList,
    bannerList:state.home.bannerList
})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(id){
        dispatch(actionCreators1.getNewsList(id))
    },
    getAllCourse(){
        dispatch(actionCreators.getAllCourseList())
    },
    getHomeBanner(){
        dispatch(actionCreators2.getHomeBanner())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)))