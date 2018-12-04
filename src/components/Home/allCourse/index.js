import React,{Component} from 'react'
import sxxImg from '../../../images/sxxbanner.png'

export default class AllCourse extends Component{
    render(){
        return(
            <div className='all-course-container'>
                <div className="course-banner">
                    <img src={sxxImg} alt=""/>
                </div>

                <div className="allcourse-position">

                </div>
            </div>
        )
    }
}