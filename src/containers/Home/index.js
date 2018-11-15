import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'


const titleList=[0,1,2,3,4,5,6,7]
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuLeftShow: this.props.menuLeftShow,
            menuRightList: null,
            newsLeft: 1
        }
        this.showMenuRight=this.showMenuRight.bind(this)
        this.hideMenuRight=this.hideMenuRight.bind(this)
    }

    showMenuRight(e){
        this.setState({
            menuRightList:e.target.value,
        })
    }
    hideMenuRight(){
        this.setState({
            menuRightList:null
        })
    }

    componentDidMount(){
        // this.props.getMenuList()
        // console.log(this.props.menuList)
        // console.log(process.env.NODE_ENV)
    }

    render() {
        const params = {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }
        let {menuLeftShow,menuRightList,newsLeft} = this.state
        return(
            <Fragment>
                <div className="nav-menuDown-box">
                    <div className="inner-box" onMouseLeave={this.hideMenuRight}>
                        {menuLeftShow?
                            <ul className="nav-menuDown example">
                                {this.props.menuList.map((item)=>(
                                    <li key={item.key} value={item.key} onMouseOver={this.showMenuRight}>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>:null
                        }
                    </div>

                </div>
                <Swiper {...params}>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                </Swiper>
                <div className="home-container">
                    <div className="item1">
                        <div className="item1-position">
                            <div className="item1-list"></div>
                            <div className="item1-list"></div>
                            <div className="item1-list"></div>
                            <div className="item1-list" style={{border:'0'}}>
                                <div className="item1-list-box"></div>
                                <div className="item1-list-box fr"></div>
                                <div className="item1-list-box" style={{marginTop:'4px'}}></div>
                                <div className="item1-list-box fr" style={{marginTop:'4px'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="course">
                        <div className="course-position">
                            <div className="title">
                                <span className='span'><span></span></span>
                                <div className='text'>0元免费课程</div>
                                <span className='span'><span></span></span>
                            </div>
                            <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                            <div className="course-list">
                                <div className="list-box"></div>
                                <div className="list-box"></div>
                                <div className="list-box"></div>
                                <div className="list-box"></div>
                                <div className="list-box"></div>
                            </div>
                            <s style={{height:'0',clear:'both',display:'block',overflow:'hidden'}}></s>
                        </div>
                    </div>
                    <div className="largeData">
                        <div className="largeData-position">
                            <div className="title">
                                <span className='span'><span></span></span>
                                <div className='text'>就业薪资大数据</div>
                                <span className='span'><span></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="teacher">
                        <div className="teacher-position">
                            <div className="title">
                                <span className='span'><span></span></span>
                                <div className='text'>师资介绍</div>
                                <span className='span'><span></span></span>
                            </div>
                            <div className="teacher-introduce">
                                <div className="introduce-list"></div>
                                <div className="introduce-list"></div>
                                <div className="introduce-list"></div>
                                <div className="introduce-list"></div>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news-position">
                            <div className="title">
                                <span className='span'><span></span></span>
                                <div className='text'>新闻资讯</div>
                                <span className='span'><span></span></span>
                            </div>
                            <div className="news-box">
                                <ul className="news-left">
                                    <li className={newsLeft==1?'active':''} onClick={()=>this.handleNewsChange(1)}>新闻资讯</li>
                                    <li className={newsLeft==2?'active':''} onClick={()=>this.handleNewsChange(2)}>行业动态</li>
                                    <li className={newsLeft==3?'active':''} onClick={()=>this.handleNewsChange(3)}>学员动态</li>
                                </ul>
                                {newsLeft==1?
                                    <div className="news-right">
                                        新闻资讯
                                    </div>
                                :newsLeft==2?
                                    <div className="news-right">
                                        行业动态
                                    </div>
                                :newsLeft==3?
                                    <div className="news-right">
                                        学员动态
                                    </div>:null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }

    handleNewsChange=(value)=>{
        this.setState({newsLeft:value})
    }
}
const mapStateToProps=(state)=>({
    menuList:state.home.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

const mapDispatchToProps=(dispatch)=>({
    getMenuList(){
        dispatch(actionCreators.getMenuLeftList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))