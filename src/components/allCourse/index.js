import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators  from '../../store/allCourse/actionCreators'
import sxxImg from '../../images/sxxbanner.png'
import {Link} from 'react-router-dom'
import lodashId from "lodash/uniqueId";
import {withRouter} from 'react-router-dom'
class AllCourse extends Component{
    componentDidMount() {
        this.props.getAllCourse()
    }

    render(){
        return(
            <div className='all-course-container'>
                <div className="course-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="allcourse-position">
                    <div className="title">全部课程</div>
                    <div className="description">更多精品优质课程</div>
                    <div className="course-list">
                        {this.props.allCourseList?this.props.allCourseList.map(item=>{
                            return (
                                <Link to={'/courseDetail/'+item.courseId} className="list-box" key={lodashId()}>
                                    <div className="span-box">
                                        <img src={item.courseImage} className='img'/>
                                    </div>
                                    <div className="content">
                                        <div className="course-title">{item.courseTitle}</div>
                                        <div className="course-text">{item.courseSubTitle}</div>
                                        <div className="price"><span>￥{item.courseActivityPrice} 免费</span><s>原价￥{item.courseOriginalPrice}</s></div>
                                    </div>
                                </Link>
                            )
                        }):null}
                        {/*<div className="list-box">
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
                        <div className="list-box">
                            <div className="span-box">
                                <span className='span5'></span>
                            </div>
                            <div className="content">
                                <div className="course-title">SVN从入门到放弃</div>
                                <div className="course-text">入门级课程你敢不敢来</div>
                                <div className="price"><span>￥0.00 免费</span><s>原价￥99.00</s></div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect((state)=>({
    allCourseList:state.course.allCourseList
}),(dispatch)=>({
    getAllCourse(){
        dispatch(actionCreators.getAllCourseList())
    }
}))(withRouter(AllCourse))