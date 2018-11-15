import React,{Component,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import logo from "../../images/logo.png"
import titleImg from  '../../images/title.png'
import phoneImg from '../../images/phone.png'
import addressImg from '../../images/address.png'
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
                            <div className='header-logo'><img src={logo} title='思学行'alt=""/></div>
                            <div className='header-biaoyu'><img src={titleImg} alt=""/></div>
                            <div className='header-right'></div>
                        </div>
                        <div className="header-nav">
                            <div className="nav-left">热门课程</div>
                            <ul className="nav-right">
                                <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                <li><NavLink to='/1' activeClassName="active">核心优势</NavLink><span></span></li>
                                <li><NavLink to='/2' activeClassName="active">授课导师</NavLink><span></span></li>
                                <li><NavLink to='/3' activeClassName="active">思学行动态</NavLink><span></span></li>
                                <li><NavLink to='/4' activeClassName="active">资料下载</NavLink><span></span></li>
                                <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                            </ul>
                        </div>
                        <s style={{height:'0',clear:'both',display:'block'}}></s>
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