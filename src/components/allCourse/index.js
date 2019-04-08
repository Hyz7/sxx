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