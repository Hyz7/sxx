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
import teacherbg from '../../images/home/teacherbg.png'
import trainingbg from '../../images/home/trainingbg.png'
import SignUp from '../../common/floatWindow/signUp'
import * as actionCreators from "../../store/allCourse/actionCreators";
import * as actionCreators1 from '../sixuexing/store/actionCreators'
import * as actionCreators2 from '../Home/store/actionCreators'
import * as actionCreators3 from '../../store/teacher/actionCreators'
import bluebg from '../../images/home/bluebg.png'
import salary from '../../images/home/salary.png'
import field from '../../images/home/field.png'
import jiaoda from '../../images/home/media/jiaoda.png'
import shiyou from '../../images/home/media/shiyou.png'
import gongda from '../../images/home/media/gongda.png'

let  a =''

let timer;
// let array;


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuRightList: false,
            newsLeft: 1,
            pages:'',
            active:false,
            itemActive:'1'
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

    checkclient=()=>{
        let scrollTop=document.body.scrollTop||document.documentElement.scrollTop
        if ( scrollTop+400>=a ) {
            this.coopContent.className?this.coopContent.className='coop-content active':''
        }else{
            this.coopContent.className?this.coopContent.className='coop-content':''
        }
    }
    equals=(x,y)=>{
        var f1=x instanceof Object;
        var f2=y instanceof Object;
        if(!f1 || !f2){
            return x===y
        }
        if(Object.keys(x).length!== Object.keys(y).length){
            return false
        }
        for(var p in x){
            var a= x[p] instanceof Object;
            var b= y[p] instanceof Object;
            if(a && b){
                this.equals(x[p],y[p])
            }else if(x[p]!=y[p]){
                return false;
            }
        }
        return true;
    }

    componentDidMount(){
        a = document.getElementById("cooperation").offsetTop;
        window.addEventListener('scroll',this.checkclient.bind(this),false)
        this.props.getHomeBanner()
        this.props.getTeacherList()
        this.props.getNewsList()
        this.props.getAllCourse()

    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.checkclient.bind(this),false)
    }

    render() {
        let {pages,active,itemActive} = this.state
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
                                <h1>国际大学生程序设计竞赛</h1>
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
                                    {/*<div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>*/}
                                </div>
                                <div className="item1-list" onClick={()=>{this.handleBoxChange('university')}}>
                                    <span className='span2'></span>
                                    <div className="list-title">实训基地</div>
                                    {/*<div className="list-text">技术赋能</div>*/}
                                   {/* <div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>*/}
                                </div>


                                <div className="item1-list" onClick={()=>{this.handleBoxChange('enterprise')}}>
                                    <span className='span3'></span>
                                    <div className="list-title">人才培养</div>
                                    {/*<div className="list-text">产业研发</div>*/}
                                    {/*<div className="inner-box">
                                        <div className="button">
                                            查看详情
                                        </div>
                                    </div>*/}
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
                        <div className="qklxyx">
                            <div className="qklxyx-position">
                                <div className="qklxyx-title">
                                    <h1 className='text'>区块链校园行</h1>
                                </div>
                                <div className="qklxyx-content">

                                    <div className="item">
                                        <img src={shiyou} alt=""/>
                                        <div className="item-title">
                                            区块链校园行NO.5·走进西南石油大学
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={gongda} alt=""/>
                                        <div className="item-title">
                                            区块链校园行NO.6·走进成都信息工程大学
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={jiaoda} alt=""/>
                                        <div className="item-title">
                                            区块链校园行NO.7·走进西南交通大学
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-position">
                                <div className="course-title">
                                    <h1 className='text'>免费课程</h1>
                                </div>
                                <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                                <div className="course-list">
                                    <Link to='allcourse' className="more-btn">查看更多></Link>
                                    {this.props.allCourseList&&this.props.allCourseList.map((item,index)=>{
                                        if(index<5){
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
                                        }
                                    })}
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
                            <img src={trainingbg} alt=""/>
                            <div className="training-box">
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
                        </div>

                        <div className="teacher">
                            <img src={teacherbg} alt=""/>
                            <div className="teacher-box">
                            <div className="teacher-title">区块链领域顶尖技术专家</div>
                            <div className="teacher-content">
                                <Link to={'/teacher'} className="more-btn">查看更多></Link>

                                {this.props.teacherList&&this.props.teacherList.filter(item=>!this.equals(item,this.props.teacherList.slice(6,7)[0])).map((item,index)=>{
                                    return (
                                        <div className="item" key={index}>
                                            <div className="inner-item">
                                                <div className="item-box">
                                                    <img src={item.teaImage} alt=""/>
                                                    <div className="name">{item.teaCname}</div>
                                                    <div className="posi">{item.teaAchievement.a}</div>
                                                    <div className="desc">{item.teaDesc}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-title">新闻中心</div>
                            <div className="news-content">
                                {this.props.newsList.slice(0,1).map(item=>{
                                    return (
                                        <div className="news-hot" key={lodashId()}>
                                            <img src={item.image} alt=""/>
                                            <div className="content">
                                                <Link to={'/sixuexing/detail?id='+item.id} className="imgTitle">{item.title}</Link>
                                                <div className="time">{item.createTime}</div>
                                                <div className="desc" dangerouslySetInnerHTML={{__html:item.content.replace(/[\r\n]/g,"")}}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="news-list">
                                    <div className="item-box">
                                        <div className={itemActive==='1'?"item active":"item"} onClick={()=>{this.setState({itemActive:'1'})}}>思学行动态</div>
                                        <div className={itemActive==='2'?"item active":"item"} onClick={()=>{this.setState({itemActive:'2'})}}>行业新闻</div>
                                        <div className={itemActive==='3'?"item active":"item"} onClick={()=>{this.setState({itemActive:'3'})}}>公众号报道</div>
                                        <Link to={'/sixuexing'} className="more-btn">查看更多></Link>
                                    </div>
                                    <div className="item-content">
                                        {itemActive==='1'&&<div className="content">
                                            {this.props.newsList.length&&this.props.newsList.slice(0,3).map((item , index)=>{
                                                return (
                                                    <Link to={'/sixuexing/detail?id='+item.id} className="list" key={index}>
                                                        <div className="list-left">
                                                            <div className="mouth">{item&&item.createTime.substring(5,7)}/{item&&item.createTime.substring(8,10)}</div>
                                                            <div className="year">{item&&item.createTime.substring(0,4)}</div>
                                                        </div>
                                                        <div className="list-box">
                                                            <div className="list-title" >{item&&item.title}</div>
                                                            <div className="list-desc" dangerouslySetInnerHTML={{__html:item.content.replace(/\s+/g,"")}}></div>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>}
                                        {itemActive==='2'&&<div className="content">
                                            {this.props.industryList.length&&this.props.industryList.slice(0,3).map((item , index)=>{
                                                return (
                                                    <Link to={'/sixuexing/detail?id='+item.id} className="list" key={index}>
                                                        <div className="list-left">
                                                            <div className="mouth">{item&&item.createTime.substring(5,7)}/{item&&item.createTime.substring(8,10)}</div>
                                                            <div className="year">{item&&item.createTime.substring(0,4)}</div>
                                                        </div>
                                                        <div className="list-box">
                                                            <div className="list-title" >{item&&item.title}</div>
                                                            <div className="list-desc" dangerouslySetInnerHTML={{__html:item.content.replace(/\s+/g,"")}}></div>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>}
                                        {itemActive==='3'&&<div className="content">
                                            {this.props.studentList.length&&this.props.studentList.slice(0,3).map((item , index)=>{
                                                return (
                                                    <Link to={'/sixuexing/detail?id='+item.id} className="list" key={index}>
                                                        <div className="list-left">
                                                            <div className="mouth">{item&&item.createTime.substring(5,7)}/{item&&item.createTime.substring(8,10)}</div>
                                                            <div className="year">{item&&item.createTime.substring(0,4)}</div>
                                                        </div>
                                                        <div className="list-box">
                                                            <div className="list-title" >{item&&item.title}</div>
                                                            <div className="list-desc" dangerouslySetInnerHTML={{__html:item.content.replace(/\s+/g,"")}}></div>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cooperation" id='cooperation'>
                            <div className="coop-title">合作校企</div>
                            <div className="coop-content " ref={node=>this.coopContent=node}>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span1'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span1 ${active==='span1'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span2'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span2 ${active==='span2'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span3'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span3 ${active==='span3'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span4'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span4 ${active==='span4'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span5'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span5 ${active==='span5'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span6'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span6 ${active==='span6'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span7'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span7 ${active==='span7'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span8'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span8 ${active==='span8'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span9'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span9 ${active==='span9'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span10'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span10 ${active==='span10'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span11'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span11 ${active==='span11'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span12'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span12 ${active==='span12'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span13'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span13 ${active==='span13'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span14'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span14 ${active==='span14'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span15'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span15 ${active==='span15'?'active':null}`}></span>
                                </div>
                                <div className="item"
                                     onMouseOver={()=>{this.setState({active:'span16'})}}
                                     onMouseOut={()=>{this.setState({active:''})}}>
                                    <span className={`span16 ${active==='span16'?'active':null}`}></span>
                                </div>
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
        // this.setState({pages:value})
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
    bannerList:state.home.bannerList,
    teacherList:state.teacher.teacherList
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
    },
    getTeacherList(){
        dispatch(actionCreators3.getTeacherList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)))