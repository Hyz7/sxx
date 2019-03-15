import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper'
import MySwiper from '../../common/MySwiper';
import connect from "react-redux/es/connect/connect";
import { withRouter, Link } from 'react-router-dom'
import * as actionCreators1 from '../sixuexing/store/actionCreators'
import Self from './server/self.js'
import University from './server/university.js'
import Enterprise from './server/enterprise.js'
import '../../../src/common/icons/iconfont'
import Data1 from '../../images/largeData/data1.png'
import Data2 from '../../images/largeData/data2.png'
import Data3 from '../../images/largeData/data3.png'
import DataTitle from '../../images/largeData/datatitle.png'
import { CSSTransition } from 'react-transition-group';
import baomingImg from '../../images/home/baoming.png'
import lodashId from "lodash/uniqueId";
import { message } from 'antd';
import FloatWin from '../../common/floatWindow'
import MyWOW from '../../common/wow'
import SignUp from '../../common/floatWindow/signUp'
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
    }

    componentDidMount(){}

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
        const imageData=[{
            image:{
                image1:'../../images/home/banner4.png',
                image2:'../../images/home/banner5.png',
                image3:'../../images/home/banner1-pc.png',
            }
        }]


        let {pages,active} = this.state
        return(
            <Fragment>
                <div className="home-container">
                    <FloatWin />
                    <SignUp />
                    <div className="Swiper-content">
                        <MySwiper params={params} imageData={imageData}/>
                        {/*<div className="nav-menuDown-box"></div>*/}
                        {/*<Swiper {...params} >
                            <div><img src={require("../../images/home/banner4.png")} alt="区块链"/></div>
                            <div><img src={require("../../images/home/banner5.png")} alt="区块链"/></div>
                            <div><img src={require("../../images/home/banner1-pc.png")} alt="区块链"/></div>

                        </Swiper>*/}
                    </div>

                    <div className="item1">
                        <div className="item1-position">

                                <div className="item1-list" onClick={()=>{this.handleBoxChange('self')}}>
                                    <span className='span1'></span>
                                    <div className="list-title">个人</div>
                                    <div className="list-text">人才培养</div>
                                    <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>
                                </div>


                                <div className="item1-list" onClick={()=>{this.handleBoxChange('university')}}>
                                    <span className='span2'></span>
                                    <div className="list-title">高校</div>
                                    <div className="list-text">技术赋能</div>
                                    <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>
                                </div>


                                <div className="item1-list" onClick={()=>{this.handleBoxChange('enterprise')}}>
                                    <span className='span3'></span>
                                    <div className="list-title">政企</div>
                                    <div className="list-text">产业研发</div>
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
                                <div className="title" style={{width:'280px'}}>
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
                        </div>
                        {/*<div className="Introduction">
                            <div className="Introduction-position">
                                <div className="introductionTitle">
                                    <h2 className="title">一个“高端前沿，薪资涨幅快”的职位，区块链工程师</h2>
                                    <h5 className="introductionDesc">每天8小时，4个月，轻松挑战30W年薪</h5>
                                </div>
                                <div className="IntroductionBox">
                                    <div className="item-box item-box1">
                                        <div className="img img1">
                                            商业<br/>价值
                                        </div>
                                        <p>分布式容错性、不可篡改性、隐私保护性</p>
                                    </div>
                                    <div className="item-box item-box1">
                                        <div className="img img1">
                                            使用<br/>场景
                                        </div>
                                        <p>征信管理、跨国交易、跨组织合作、资源共享，物联网<br/>等诸多领域</p>
                                    </div>
                                    <div className="item-box">
                                        <div className="img img1">
                                            优势<br/>前景
                                        </div>
                                        <p>极大降低整个商业体系运转的成本，同时大大提高社会<br/>沟通协作的效率</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="employment">
                            <div className="employment-position">
                                <div className="employmentTitle">
                                    <h2 className="title">高薪就业班</h2>
                                    <h5 className="introductionDesc">做一个走在行业前沿,不仅懂前端还懂后端的高薪全栈工程师</h5>
                                </div>
                                <div className="employmentBox">
                                    <div className="employmentItem fl">
                                        <div className="itemTop">
                                            <div className="itemTopBox">
                                                <div className="itemL">
                                                    <div className="title">前端开发工程师</div>
                                                    <p className='line line1'></p>
                                                    <p className="text">
                                                        会coding的设计师、懂设计的程序猿。各大网站每天上万条招聘信息，快速入门 IT行业的不二之选。
                                                    </p>
                                                </div>
                                                <div className="img1 itemImg"></div>
                                            </div>
                                            <div className="itemTopBox1">
                                                <div className="title title1">前端开发工程师</div>
                                                <div className="text">
                                                    <span>岗位：</span>
                                                    前端工程师是目前非常受欢迎的一个职业，生活中web端页面和移动端的界面、微信中的小程序，以及pad等各种移动设备所看到的页面，都是由前端工程师做的。作为用户交互必不可少的环节，对前端工程师的需求量与日俱增，薪资水平日益高涨。
                                                </div>
                                                <div className="text">
                                                    <span>技能：</span>
                                                    能够熟练掌握HTML5,CSS3,JS,运用主流框架进行项目开发，协同团队合作，提高工作效率，开发高性能网站。
                                                </div>
                                                <div className="button button1">了解更多前端开发工程师</div>
                                            </div>
                                        </div>
                                        <div className="itemBottom">
                                            <div className="text">总时长177小时<span></span>15641人学习</div>
                                        </div>
                                    </div>
                                    <div className="employmentItem fl">
                                        <div className="itemTop">
                                            <div className="itemTopBox">
                                                <div className="itemL">
                                                    <div className="title">区块链开发工程师</div>
                                                    <p className='line line2'></p>
                                                    <p className="text">
                                                        当前最高端最火热的岗位之一，高薪且人才稀缺。需要前端和Go等技术基础，适合中高级开发人员进行开发学习。
                                                    </p>
                                                </div>
                                                <div className="img2 itemImg"></div>
                                            </div>
                                            <div className="itemTopBox1">
                                                <div className="title title2">区块链开发工程师</div>
                                                <div className="text">
                                                    <span>岗位：</span>
                                                    金融安全、信息安全等新兴方向再一次推动了区块链工程师的职业发展。区块链开发工程师涉及到多个领域，主要征信管理、跨国交易、跨组织合作、资源共享和物联网等诸多领域，也涌现出大量有趣的应用案例。
                                                </div>
                                                <div className="text">
                                                    <span>技能：</span>
                                                    掌握GO语言、C++、Java、Python、系统架构、Linux、hyperiedger等两至三项技能以上，还必须同时了解密码学、共识算法、超级账本、智能合约等。
                                                </div>
                                                <div className="button button2">了解更多区块链开发工程师</div>
                                            </div>
                                        </div>
                                        <div className="itemBottom">
                                            <div className="text">总时长177小时<span></span>15641人学习</div>
                                        </div>
                                    </div>
                                    <div className="employmentItem fl">
                                        <div className="itemTop">
                                            <div className="itemTopBox">
                                                <div className="itemL">
                                                    <div className="title">Golang开发工程师</div>
                                                    <p className='line line3'></p>
                                                    <p className="text">
                                                        Go协程比线程启动更快。Go可以像Java,C和C++高效处理并发，同时像Earlang以简洁直观的代码执行并发。
                                                    </p>
                                                </div>
                                                <div className="img3 itemImg"></div>
                                            </div>
                                            <div className="itemTopBox1">
                                                <div className="title title3">Golang开发工程师</div>
                                                <div className="text">
                                                    <span>岗位：</span>
                                                    区块链开发是Go语言的主要应用场景。Go是Google支持的，谷歌拥有世界上最大的云基础设施之一。并且他的规模不断扩大。Go是由谷歌设计来解决他们的支持可扩展性和有效性问题。
                                                </div>
                                                <div className="text">
                                                    <span>技能：</span>
                                                    Web后端开发，如Socket ，高负载、高并发 ，MQTT ，Golang协程与channel
                                                    前端能力，服务认证 ，实时推送 ，文件存储 ，知识库管理 ，精通Go ，后端系统架构 ，熟悉算法 ，熟悉各种数据库数据库 ，技术、业务、产品
                                                </div>
                                                <div className="button button3">了解更多Golang开发工程师</div>
                                            </div>
                                        </div>
                                        <div className="itemBottom">
                                            <div className="text">总时长177小时<span></span>15641人学习</div>
                                        </div>
                                    </div>
                                    <div className="employmentItem fl">
                                        <div className="itemTop">
                                            <div className="itemTopBox">
                                                <div className="itemL">
                                                    <div className="title">Python开发工程师</div>
                                                    <p className='line line4'></p>
                                                    <p className="text">
                                                        web后端，网络安全，简单易学，跨平台可扩展性强，爬虫技术，渗透测试，人工智能等前沿技术都在使用Python。
                                                    </p>
                                                </div>
                                                <div className="img4 itemImg"></div>
                                            </div>
                                            <div className="itemTopBox1">
                                                <div className="title title4">Python开发工程师</div>
                                                <div className="text">
                                                    <span>岗位：</span>
                                                    Python开发工程师是非常具有竞争性的岗位，就业前景广阔。Python开发工程师主要从事Web后台，渗透测试，人工智能等开发工作。使用流行框架快速搭建企业项目架构，多线程数据爬虫，人工智能多用Python实现。
                                                </div>
                                                <div className="text">
                                                    <span>技能：</span>
                                                    掌握Python开发的必备技能，了解爬虫，安全测试开发等相关技术，能实现黑百盒测试，人工智能技术，使用流行框架，独立开发项目。
                                                </div>
                                                <div className="button button4">了解更多Python开发工程师</div>
                                            </div>
                                        </div>
                                        <div className="itemBottom">
                                            <div className="text">总时长177小时<span></span>15641人学习</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="advantage">
                            <div className="advantage-position">
                                <div className="advantageTitle">
                                    <h2 className="title">与别的培训不同，我们更在意你的学习质量！</h2>
                                    <h5 className="introductionDesc">虚假承诺、乱画大饼的培训多如牛毛，我们不同，我们更专注于是否能让你学到真东西！</h5>
                                </div>
                                <div className="advantage-itemBox">
                                    <div className="item">
                                        <div className="title">线下培训班</div>
                                        <ul className='item-text'>
                                            <li><span></span>收费高，动辄几万元</li>
                                            <li><span></span>课程知识反复使用，更新速度慢</li>
                                            <li><span></span>讲师身份包装，水平参差不齐</li>
                                            <li><span></span>学完推荐入职，但不保证成功</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <div className="title">“有的”线上培训</div>
                                        <ul className='item-text'>
                                            <li><span></span>费用不低</li>
                                            <li><span></span>课程缺乏设计，内容陈旧</li>
                                            <li><span></span>讲师自身技术水平难以保证</li>
                                            <li><span></span>夸大学习效果，实际难以落地入职</li>
                                        </ul>
                                    </div>
                                    <div className="item" style={{background:'#F9F4FE'}}>
                                        <div className="title" style={{color:'#9447EB'}}>思学行就业班</div>
                                        <ul className='item-text'>
                                            <li className='li1'><span className='span1'></span>分阶段学习，费用更亲民</li>
                                            <li className='li1'><span className='span1'></span>教学内容主流实用，与时俱进</li>
                                            <li className='li1'><span className='span1'></span>讲师均来自国内一线互联网公司</li>
                                            <li className='li1'><span className='span1'></span>课程技术接轨企业用人标准</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="advantageTitle">
                                    <h2 className="title">为什么思学行就业班课程能让你学会</h2>
                                </div>
                                <div className="advantage-item-box">
                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-jiaoxuezhongxin'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">教学内容：结合企业需求</div>
                                        <p>根据企业需求、行业发展，系统设计<br/>的课程</p>
                                    </div>
                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-baoming'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">教学方式：学练测评一体</div>
                                        <p>课程不只是讲课，练习，评测，作业
                                            <br/>一体化，学习、巩固都不能少</p>
                                    </div>
                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-xinwen'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">课程案例：案例作业丰富</div>
                                        <p>根据企业需求、行业发展，系统设计<br/>的课程</p>
                                    </div>
                                    <div className="item-list" style={{marginRight:'0'}}>
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-link'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">教辅材料：大量辅助资料</div>
                                        <p>根据企业需求、行业发展，系统设计<br/>的课程</p>
                                    </div>
                                </div>
                                <div className="advantage-item-box">
                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-shijian'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">随到随学</div>
                                        <p>学习时间灵活自由，放学、下班皆可
                                            <br/>学习，任你做主</p>
                                    </div>
                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-renwu-ren'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">1V1作业批改</div>
                                        <p>课程不只是讲课，练习，评测，作业
                                            <br/>一体化，学习、巩固都不能少</p>
                                    </div>

                                    <div className="item-list">
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-xiaoxi'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">答疑解惑</div>
                                        <p>课程设立专门的问答区，可随时提
                                            <br/>问，我们将悉心为你解答</p>

                                    </div>
                                    <div className="item-list"  style={{marginRight:'0'}}>
                                        <div className="img">
                                            <svg className='icon-svg'>
                                                <use xlinkHref='#icon-xiazai'></use>
                                            </svg>
                                        </div>
                                        <div className="title1">代码下载</div>
                                        <p>讲课过程中的代码，你可随时下载到
                                            <br/>本地，供你练习使用</p>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        <div className="largeData">
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
                                        {/*<MySwiper params={params1}/>*/}
                                    </div>
                                    <div className="data-description">
                                        中国互联网行业已具规模，并且发展迅猛，行业平均就业薪资高，但专业技术人才供需严重失衡，未来行业的发展亟待复合型及国际化人才的出现。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher">
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
                        </div>
                        <div className="news">
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
                        </div>
                        <div className="baoming" id='baoming'>
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
    newsList:state.sixuexing.newsList,
    industryList:state.sixuexing.industryList,
    studentList:state.sixuexing.studentList

})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(id){
        dispatch(actionCreators1.getNewsList(id))
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)))