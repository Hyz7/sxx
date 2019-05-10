import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import lodashId from "lodash/uniqueId";

let isFirst = true;

class CourseList extends Component{
    componentDidMount() {}

    render(){
        const allCourseList=this.props.allCourseList
        return(
            <div className="course-list">
                {allCourseList&&allCourseList.map(item=>{
                    return (
                        <Link to={'/courseDetail/'+item.courseId} className="list-box" key={lodashId()}>
                            <div className="span-box">
                                <img src={item.courseImage} className='img'/>
                            </div>
                            <div className="content">
                                <div className="course-title">{item.courseTitle}</div>
                                <div className="course-text">{item.courseSubTitle}</div>
                                {/*<div className="price"><span>￥{item.courseActivityPrice} 免费</span><s>原价￥{item.courseOriginalPrice}</s></div>*/}
                                <div className="course-type">
                                    <div className="left-box">
                                        <span></span>
                                        <div className="text">{item.courseWatchCount}</div>
                                    </div>
                                    <div className="right-box" style={{backgroundColor:item.classify==courseStatus[1].type?courseStatus[1].color:courseStatus[2].color}}>{item.classify==courseStatus[1].type?courseStatus[1].name:courseStatus[2].name}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}


export default CourseList