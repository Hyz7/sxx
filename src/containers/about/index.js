import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
class About extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return(
            <div>
                this is about page!
            </div>
        )
    }
}

export default withRouter(About)