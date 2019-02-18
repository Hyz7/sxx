import React, {Component,Fragment} from 'react';
import {Popover} from 'antd'

const wxContact=(
    <div>
        <img src={require('../../images/publicNum.png')} alt=""/>
    </div>
)
const phoneContact=(
    <div>
        <div className="text" style={{color:'#5d96ee'}}>
            成都：028-8525-3153
        </div>
    </div>
)
class FloatWin extends Component {
    state={
        visible:true
    }
    componentDidMount() {
        // document.addEventListener('scroll',this.winScroll.bind(this),false);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll',this.winScroll.bind(this),false);
    }

    winScroll=()=>{
        let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scollTop < 700){
            if(this.state.visible){
                this.setState({
                    visible:!this.state.visible
                })
            }
            // this.float.style.display='none'
        }else{
            if(!this.state.visible){
                this.setState({
                    visible:!this.state.visible
                })
            }
            // this.float.style.display='block'
        }
    }

    backTop=()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    scrollToptimer=()=>{
        let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let timer=setInterval(function () {

            // let speed = top / 4;
            let speed = 20;
            if (scollTop!==0) {
                scollTop -= speed;
                if(top<20){
                    scollTop=0
                }
            }else {
                scollTop -= speed;
            }
            if (scollTop === 0) {
                clearInterval(timer);
            }
        }, 5);
    }

    render() {
        return (
            <Fragment>
                {this.state.visible?
                    <div className='float-container' id='float-container' ref={node=>this.float=node}>
                        {/*<div className="qqContact">

                        </div>*/}
                        <a className="qqContact" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                            <img src={require('../../images/floatContact.png')} alt=""/>
                        </a>
                        <ul className="contactBox">
                            <li>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-qian'></use>
                                </svg>
                                <div className="text">0元入学</div>
                                <span></span>
                            </li>
                            <li>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-shipin'></use>
                                </svg>
                                <div className="text">视频下载</div>
                                <span></span>
                            </li>
                            <Popover  placement="left" title='关注微信' content={wxContact} trigger="hover">
                                <li>
                                    <svg className='icon-svg'>
                                        <use xlinkHref='#icon-weixin1'></use>
                                    </svg>
                                    <div className="text">关注微信</div>
                                    <span></span>
                                </li>
                            </Popover>
                            <Popover  placement="left" title='服务热线' content={phoneContact} trigger="hover">
                            <li>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-fuwurexian'></use>
                                </svg>
                                <div className="text">服务热线</div>
                                <span></span>
                            </li>
                            </Popover>
                        </ul>
                        <a className="toTop" href="javascript: scroll(0, 0)">
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiantou-copy-copy-copy'></use>
                            </svg>

                        </a>
                        {/*<a className="qqContact" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                            我要报名
                        </a>
                        <img src={require('../../images/sxxfloat.png')} alt=""/>
                        <a className="toTop" href="javascript: scroll(0, 0)" onClick={()=>{
                            // this.scrollToptimer()
                            // this.backTop()
                        }}></a>*/}
                    </div>:null
                }
            </Fragment>)
    }
}

export default FloatWin;