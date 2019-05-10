import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators  from '../../store/allCourse/actionCreators'
import sxxImg from '../../images/sxxbanner.png'
import {Link} from 'react-router-dom'
import lodashId from "lodash/uniqueId";
import {withRouter} from 'react-router-dom'
import CourseList from './courseList'
class AllCourse extends Component{
    componentDidMount() {
        this.props.getAllCourse()
        document.documentElement.scrollTop=0
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
                    <CourseList allCourseList={this.props.allCourseList}/>

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