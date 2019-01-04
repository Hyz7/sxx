import React,{ Component, Fragment } from 'react'
import {NavLink, Link, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../icons/iconfont'
import { CSSTransition } from 'react-transition-group';
import ContactUs from "../../components/contact";
import QKL from "../../components/Home/QKL";
import CourseDetail from "../../components/Home/allCourse/courseDetail";
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            star: false,
            popupHeader:false,
        }
    }

    componentDidMount(){

    }

    render() {
        let { popupHeader }=this.state
        return(
            <Fragment>
                <CSSTransition
                    in={true}
                    timeout={300}
                    appear={true}
                    classNames="star"
                    unmountOnExit
                >
                    <header className='header-container star'>
                        <div className="header-position">
                            <div className="header-top">
                                <NavLink to='/'activeClassName='header-logo'></NavLink>
                                <div className='header-biaoyu'></div>
                                <div className='header-right'>
                                    <div className='header-text'><span className='span1'></span>成都</div>
                                    <div className='header-text'><span className='span2'></span>028-8525-3153</div>
                                </div>
                            </div>
                            <div className="header-nav">
                                {location.pathname=='/'?<div className="nav-left">热门课程</div>:null}
                                <ul className="nav-right">
                                    <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                    <li><NavLink to='/core' activeClassName="active">核心优势</NavLink><span></span></li>
                                    <li><NavLink to='/teacher' activeClassName="active">授课导师</NavLink><span></span></li>
                                    <li onMouseOver={()=>{this.setState({popupHeader:true})}}  onMouseLeave={()=>{this.setState({popupHeader:false})}}>
                                        <NavLink to='/sixuexing' activeClassName="active">思学行动态
                                            <svg className="icon-svg">
                                                <use xlinkHref='#icon-jiantou-copy-copy'></use>
                                            </svg>
                                        </NavLink>
                                        <span></span>
                                        <CSSTransition
                                            in={this.state.popupHeader}
                                            timeout={300}
                                            classNames="popup"
                                            unmountOnExit
                                        >
                                        <div className="popup-header">
                                            <div className='list'><Link to='/sixuexing/news'>新闻资讯</Link></div>
                                            <div className='list'><Link to='/sixuexing/industry'>行业动态</Link></div>
                                            <div className='list'><Link to='/sixuexing/student'>学员动态</Link></div>
                                        </div>
                                        </CSSTransition>
                                    </li>
                                    <li><NavLink to='/download' activeClassName="active">资料下载</NavLink><span></span></li>
                                    <li><NavLink to='/recruitment' activeClassName="active">人才招聘</NavLink><span></span></li>
                                    <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                                    <li><NavLink to='/contactUs' activeClassName="active">联系我们</NavLink><span></span></li>
                                </ul>
                            </div>
                            <s style={{height:'0',clear:'both',display:'block'}}></s>
                        </div>
                    </header>
                </CSSTransition>

            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    courseShow:state.header.courseShow,
})

export default withRouter(connect(mapStateToProps,null)(Header))