import React,{Component} from 'react'
import {Router,Link} from 'react-router-dom'
export default class Header extends Component{
    render() {
        return(
            <div className='header-container'>
                <div className="header-position">
                    <div className="header-top">
                        <img src={require("../../images/logo.png")} alt=""/>
                    </div>
                    <div className="header-nav">
                        <div className="nav-left">热门课程</div>
                        <div className="nav right">
                            <Router>
                                <Link to='/'>首页</Link>
                                <Link to='/aboutUs'>关于我们</Link>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}