import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
// import sxxImg from '../../images/sxxbanner.png'
class Download extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return(
            <div className='teacher-container'>

            </div>
        )
    }
}

export default withRouter(Download)