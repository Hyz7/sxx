import React,{Component,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../icons/iconfont'
import { CSSTransition } from 'react-transition-group';
class Header extends Component{
    constructor(props){
        super(props)
        this.state={star: false}
    }

    componentDidMount(){

    }

    render() {
        return(
            <Fragment>
                <CSSTransition
                    in={true}
                    timeout={300}
                    appear={true}
                    classNames="star"
                    unmountOnExit
                >
                    <div className='header-container star'>
                        <div className="header-position">
                            <div className="header-top">
                                <NavLink to='/' activeClassName='header-logo'></NavLink>
                                <div className='header-biaoyu'></div>
                                <div className='header-right'>
                                    <div className='header-text'><span className='span1'></span>成都</div>
                                    <div className='header-text'><span className='span2'></span>400-000-0000</div>
                                </div>
                            </div>
                            <div className="header-nav">
                                <div className="nav-left">热门课程</div>
                                <ul className="nav-right">
                                    <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                    <li><NavLink to='/1' activeClassName="active">核心优势</NavLink><span></span></li>
                                    <li><NavLink to='/teacher' activeClassName="active">授课导师</NavLink><span></span></li>
                                    <li>
                                        <NavLink to='/sixuexing' activeClassName="active">思学行动态
                                            <svg className="icon-svg">
                                                <use xlinkHref='#icon-jiantou-copy-copy'></use>
                                            </svg>
                                        </NavLink>
                                        <span></span>
                                    </li>
                                    <li><NavLink to='/4' activeClassName="active">资料下载</NavLink><span></span></li>
                                    <li><NavLink to='/5' activeClassName="active">网课平台</NavLink><span></span></li>
                                    <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                                </ul>
                            </div>
                            <s style={{height:'0',clear:'both',display:'block'}}></s>
                        </div>
                    </div>
                </CSSTransition>

            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    menuList:state.header.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

export default withRouter(connect(mapStateToProps,null)(Header))