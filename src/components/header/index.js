import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
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
                            <NavLink to='/'>首页</NavLink>
                            <NavLink to='/aboutUs'>关于我们</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}