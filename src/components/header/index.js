import React,{Component,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){

    }

    render() {
        return(
            <Fragment>
                <div className='header-container'>
                    <div className="header-position">
                        <div className="header-top">
                            <img src={require("../../images/logo.png")} alt=""/>
                        </div>
                        <div className="header-nav">
                            <div className="nav-left">热门课程</div>
                            <ul className="nav-right">
                                <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                <li><NavLink to='/1' activeClassName="active">核心优势</NavLink><span></span></li>
                                <li><NavLink to='/2' activeClassName="active">授课导师</NavLink><span></span></li>
                                <li><NavLink to='/3' activeClassName="active">思学行动态</NavLink><span></span></li>
                                <li><NavLink to='/4' activeClassName="active">资料下载</NavLink><span></span></li>
                                <li><NavLink to='/5' activeClassName="active">联系我们</NavLink><span></span></li>
                                <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    menuList:state.header.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

export default withRouter(connect(mapStateToProps,null)(Header))