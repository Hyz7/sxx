import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import sxxImg from '../../images/sxxbanner.png'
class Teacher extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return(
            <div className='teacher-container'>
                {/*<div className="teacher-banner">
                    <img src={sxxImg} alt=""/>
                </div>*/}
                {/*<div className="teacher-item1">
                    <div className="teacher-item-box fr"></div>
                </div>
                <div className="teacher-item2">
                    <div className="teacher-item-box fl"></div>
                </div>
                <div className="teacher-item3">
                    <div className="teacher-item-box fr"></div>
                </div>
                <div className="teacher-item4">
                    <div className="teacher-item-box fl"></div>
                </div>
                <div className="teacher-item5">
                    <div className="teacher-item-box fr"></div>
                </div>*/}
            </div>
        )
    }
}

export default withRouter(Teacher)