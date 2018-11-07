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
        console.log(this.props)
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
                                <li><NavLink to='/' activeClassName="active">首页</NavLink></li>
                                <li><NavLink to='/1'>核心优势</NavLink></li>
                                <li><NavLink to='/2'>授课导师</NavLink></li>
                                <li><NavLink to='/3'>思学行动态</NavLink></li>
                                <li><NavLink to='/4'>资料下载</NavLink></li>
                                <li><NavLink to='/5'>联系我们</NavLink></li>
                                <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink></li>
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