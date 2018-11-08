import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom'
const titleList=[0,1,2,3,4,5,6,7]
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            menuLeftShow:this.props.menuLeftShow,
            menuRightList:null,
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

    componentDidMount(){}

    render() {
        const params = {
            effect: 'flip',
            grabCursor: true,
            loop: true,
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
        let {menuLeftShow,menuRightList} = this.state
        return(
            <Fragment>
                <div className="nav-menuDown-box">
                    <div className="inner-box" onMouseLeave={this.hideMenuRight}>
                        {menuLeftShow?
                            <ul className="nav-menuDown">
                                {this.props.menuList.map((item)=>(
                                        <li key={item.key} value={item.key} onMouseOver={this.showMenuRight}>
                                            {item.title}
                                        </li>
                                ))}
                            </ul>:null
                        }
                        {titleList[0]==menuRightList?
                            <div className="nav-menuDown-right">
                                网络安全
                            </div>:null
                        }

                        {titleList[1]==menuRightList?
                            <div className="nav-menuDown-right">
                                核心优势
                            </div>:null
                        }
                    </div>
                </div>
                <Swiper {...params}>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                </Swiper>
            </Fragment>

        )
    }
}
const mapStateToProps=(state)=>({
    menuList:state.home.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

export default withRouter(connect(mapStateToProps,null)(Home))