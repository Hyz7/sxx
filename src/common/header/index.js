import React,{ Component, Fragment } from 'react'
import {NavLink, Link, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../icons/iconfont'
import { CSSTransition } from 'react-transition-group';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            star: false,
            popupHeader:false,
        }
    }

    getScollTop=()=>{

        let header=this.header
        let scrollTop=document.body.scrollTop||document.documentElement.scrollTop
        if(scrollTop>100){
            header.className='header-container active'
        }else{
            header.className='header-container'
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.getScollTop.bind(this),false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.getScollTop.bind(this),false)
    }

    render() {
        let { popupHeader }=this.state
        return(
            <Fragment>
                    <header className='header-container' ref={node=>this.header=node}>
                        <div className="header-position">
                            <div className="header-top" ref={node=>this.headerTop=node}>
                                <NavLink to='/'activeClassName='header-logo'></NavLink>
                                {/*<div className='header-biaoyu'></div>*/}
                                {/*<h1 className="header-title">具有区块链教材研发、制定能力的全球化教育培训中心</h1>*/}
                                <ul className="header-navbar">
                                    <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                    <li><NavLink to='/allcourse' activeClassName="active">免费课程</NavLink><span></span></li>
                                    <li><NavLink to='/teacher' activeClassName="active">授课导师</NavLink><span></span></li>
                                    <li><NavLink to='/sixuexing' activeClassName="active">思学行动态</NavLink><span></span></li>
                                    <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                                </ul>
                                <div className='header-right fr'>
                                    <div className='header-text'><span className='span1'></span>成都</div>
                                    <div className='header-text'><span className='span2'></span>028-6385-2532</div>
                                </div>
                            </div>

                            {/*<div className="header-nav">
                                {location.pathname=='/'?
                                    <div>
                                        <div className="nav-left">热门课程</div>
                                        <div className="inner-box" onMouseLeave={this.hideMenuRight}>
                                            <CSSTransition
                                                in={true}
                                                timeout={300}
                                                appear={true}
                                                classNames="bannerList"
                                                unmountOnExit
                                            >
                                                <div className="nav-menuDown">
                                                    <div className="box">
                                                        <Link to='/qkl' className="item">区块链工程师</Link>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>Javascript ES6</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>Python</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>Swift程序设计</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>新一代网络安全</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>全栈软件测试</div>
                                                    </div>
                                                    <div className="box">
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>C/C++</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>GO语言</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>大数据</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>云计算</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>AI人工智能</div>
                                                        <div className="item" onClick={()=>{this.warningMsg()}}>智能物联网</div>
                                                    </div>
                                                </div>
                                            </CSSTransition>
                                        </div>
                                    </div>
                                :null}
                                <ul className="nav-right">
                                    <li><NavLink to='/' exact activeClassName="active">首页</NavLink><span></span></li>
                                    <li><NavLink to='/core' activeClassName="active">核心优势</NavLink><span></span></li>
                                    <li><NavLink to='/teacher' activeClassName="active">授课导师</NavLink><span></span></li>
                                    <li><NavLink to='/allcourse' activeClassName="active">在线免费试学</NavLink><span></span></li>
                                    <li><NavLink to='/sixuexing' activeClassName="active">思学行动态</NavLink><span></span></li>
                                    <li><NavLink to='/download' activeClassName="active">资料下载</NavLink><span></span></li>
                                    <li><NavLink to='/recruitment' activeClassName="active">人才招聘</NavLink><span></span></li>
                                    <li><NavLink to='/aboutUs' activeClassName="active">关于我们</NavLink><span></span></li>
                                </ul>
                            </div>*/}
                            <s style={{height:'0',clear:'both',display:'block'}}></s>
                        </div>
                    </header>
            </Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    courseShow:state.header.courseShow,
})

export default withRouter(connect(mapStateToProps,null)(Header))