import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import * as actionCreators from '../../store/allCourse/actionCreators'
import axios from 'axios'
import * as API from '../../api'
import uniqueId from 'lodash/uniqueId'
import MyPlayer from '../../common/video'
import sxxImg from "../../images/sxxbanner.png";
let listBox=[]
let list=[]
class CourseDetail extends Component {
    state={
        tabStatus:'induction',
        mediaStatus:true
    }

    componentDidMount() {
        document.documentElement.scrollTop=0
        this.props.getCourseDetail(this.props.match.params.id)
        axios.get(API.GET_COURSE_CATALOGUE+'?courseId='+this.props.match.params.id,{baseURL: 'https://sixuexing.com/home/',
        }).then(res=>{
            listBox.length=0
            listBox.push(res.data)
            this.setState({courseList:listBox},()=>{
                this.renderTree(this.state.courseList)
                if(this.state.courseList[0].children&&this.state.courseList[0].children.length){
                    this.state.courseList.forEach(v=>{
                        v.children.forEach((v2,index)=>{
                            if(index==0){
                                this.setState({courseNode:v2.pname})
                                v2.children.forEach((v3,index)=>{
                                    if(index==0){
                                        this.setState({courseDetailName:v3.pname,v3Url:v3.mediaUrl})
                                    }
                                })
                            }
                        })
                    })
                }
            })
        })
    }

    renderTree=(courseList)=>{
        list.length=0
        courseList&&courseList[0].children?courseList.forEach(v=>{
            list.push({v1:v.pname})
            // console.log('课程名',v)
            this.setState({courseName:v.pname})
            v.children.forEach((v2,index)=>{
                // console.log('章节',v2)
                list.push({v2:v2.pname,index})
                v2.children.forEach((v3,index)=>{
                    list.push({v3:v3.pname,index,url:v3.mediaUrl,id:v3.id})
                    // console.log('小节',v3)
                })
            })
        }):null
    }

    searchParentNode=(id)=>{
        listBox.forEach(v=>{
            v.children.forEach((v2,index)=>{
                v2.children.forEach((v3,index1)=>{
                    if(v3.id==id){
                        this.setState({
                            courseNodeIndex: '第'+(index+1)+'章',
                            courseNode: v2.pname,
                            courseDetailName: v3.pname
                        })
                    }
                })
            })
        })
    }

    render() {
        let { tabStatus,mediaStatus }=this.state
        let {
            courseTitle,
            courseSubTitle,
            courseImage,
            courseTeacher,
            courseWatchCount,
            courseTeacherImage,
            courseTeacherIntroduce,
            coursePreferentialTime,
            courseActivityPrice,
            courseOriginalPrice,
            coursePublicTime,
            courseIntroduce,
            introduce,
            courseCatalog,
            courseVideoUrl,
            courseCoverImg,
            classify
        }=this.props.courseDetailInfo
        return (
            <div className='courseDetail-container'>
                <div className="course-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="position">

                    {mediaStatus?
                        <div className="header-box">
                            <img src={courseImage} alt=""/>
                            <div className="content">
                                <div className="title">{courseTitle}</div>
                                <div className="description">{courseSubTitle}</div>
                                <div className="type">{classify==courseStatus[1].type?courseStatus[1].name:courseStatus[2].name}</div>
                                <div className="text">主讲老师：{courseTeacher}</div>
                                <div className="text">观看次数：{courseWatchCount}</div>
                                <div className="createTime">发布时间：{coursePublicTime}</div>
                                <div className="price-box">
                                    <div className="top">
                                        <div className="left">限量特惠  2018.11.20 ~ 2019.11.30</div>
                                        <div className="right">剩1865份 恢复原价</div>
                                    </div>
                                    <div className="bottom">
                                        <div className="text">活动价：<span>¥{courseActivityPrice}</span></div>
                                        <s className="text">原件¥{courseOriginalPrice}</s>
                                    </div>
                                </div>
                                <div className="tryWatch" onClick={()=>{
                                    this.openMedia()
                                    this.setState({mediaUrl: this.state.v3Url})
                                }}>立即播放</div>
                            </div>
                        </div>
                    :
                        <div className="header-box1">
                            <div className="mediaTitle">
                                <Link to={'/'} className="link">首页</Link>>
                                {this.state.courseNodeIndex?this.state.courseNodeIndex:<Link to={'/allCourse'} className="link">课程列表</Link>}>
                                {this.state.courseNode?this.state.courseNode:'暂无'}>
                                {this.state.courseDetailName?this.state.courseDetailName:'暂无'}
                            </div>
                            <MyPlayer poster={courseCoverImg} url={this.state.mediaUrl} width={1120} height={400} autoPlay={false}/>
                        </div>
                    }
                    <div className="titleTop">
                        <span className={tabStatus=='induction'?'active':''} onClick={()=>{this.setState({tabStatus:'induction'})}}>介绍</span>
                        {courseSubTitle&&courseSubTitle.indexOf('区块链校园行')==-1?<span className={tabStatus=='catalogue'?'active':''} onClick={()=>{this.setState({tabStatus:'catalogue'})}}>目录</span>:null}
                    </div>
                    <div className="content-box">
                        <div className="left">

                            {tabStatus=='induction'?
                                <div className="content" dangerouslySetInnerHTML={{__html:courseIntroduce}}></div>
                                :
                                <div className='tree-container'>
                                    {list.length?list.map(item=>{
                                        if(item.v1){
                                            return (
                                                <div className='v1Style' key={uniqueId()}>
                                                    {item.v1}
                                                </div>
                                            )
                                        }
                                        if(item.v2){
                                            return (
                                                <div  className='v2Style' key={uniqueId()}>
                                                    <div className="titleName">章节{item.index+1}</div>
                                                    {item.v2}
                                                </div>
                                            )
                                        }
                                        if(item.v3){
                                            return (
                                                <div className='v3Style' key={uniqueId()} onClick={()=>{
                                                    this.getMediaUrl(item.url)
                                                    this.openMedia()
                                                    this.searchParentNode(item.id)
                                                }}>
                                                    <div className="titleName" >课时{item.index+1}</div>
                                                    {item.v3}
                                                </div>
                                            )
                                        }

                                    }):<div>目录暂时未上传!</div>}
                                </div>

                            }
                        </div>
                        <div className="right">
                            <div className="item item1">
                                <div className="title">主讲老师</div>
                                <img src={courseTeacherImage?courseTeacherImage:''} alt="区块链"/>
                                <div className="name">{courseTeacher}</div>
                                <div className="description">{courseTeacherIntroduce&&courseTeacherIntroduce}</div>
                            </div>
                            {/*{courseSubTitle&&courseSubTitle.indexOf('区块链校园行')!==-1?<div className="item item2">
                                <div className="title">区块链校园行</div>
                                <div className="description">
                                    {introduce&&introduce}
                                </div>
                            </div>:null}*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getMediaUrl=(url)=>{
        this.setState({mediaUrl:url})
    }

    openMedia=()=>{
        this.setState({mediaStatus:false})
    }
}



export default connect((state)=>({
    courseDetailInfo:state.course.courseDetailInfo
}),(dispatch)=>({
    getCourseDetail(id){
        dispatch(actionCreators.getCourseDetailInfo(id))
    }
}))(withRouter(CourseDetail));