import React, { Component } from 'react';
import enterprise from '../../../images/server/enterprise.png'
import MyWOW from "../../../common/wow";
class Enterprise extends Component {
    render(){
        return (
            <MyWOW  className='wow bounceInLeft' delay="0">
                <div className='server-item-box'>
                    <div className="item-position">
                        <div className="title">
                            <div className="title1">服务对象</div>
                            <div className="title2">多种服务方式，提供优质的教育</div>
                        </div>
                        <div className="item-content">
                            <div className="item-img">
                                <img src={enterprise} alt=""/>
                                <div className="theme">
                                    <div className="num">3</div>
                                    <div className="text">人才培养</div>
                                </div>
                            </div>

                            <div className="item-list-box">
                                <div className="item-text">以新技术产业人才培养为核心，为有志于科学研究的优秀青少年提供与现代前沿技术零距离接触的机会，提高其自身的科学素养以及创新思维和实践的能力。</div>
                                <div className="content content3">
                                    {/*<div className="list">
                                        <div className="icon icon1"></div>
                                        <span>员工培养</span>
                                        以新技术产业人才培养为核心，为有志于科学研究的优秀青少年提供与现代前沿技术零距离接触的机会，提高其自身的科学素养以及创新思维和实践的能力。
                                    </div>*/}
                                    <div className="list">
                                        <div className="icon icon2"></div>
                                        <span>ACMI课程</span>
                                        独立研发对标ACM、信息学奥数大赛课程，助力孩子的科技梦、名校梦
                                    </div>
                                    <div className="list">
                                        <div className="icon icon3"></div>
                                        <span>区块链技术大赛</span>
                                        对接全球区块链技术大赛资源，培养具有创新科研能力的优秀人才
                                    </div>
                                    {/*<div className="list">
                                        <div className="icon icon4"></div>
                                        <span>双平台选择</span>
                                        提供线上教学平台学习和线下实训双模式培养，企业可根据自身需要进行选择
                                    </div>*/}
                                </div>
                                <div className="btn-box">
                                    <div className="online-btn">在线咨询</div>
                                    <div className="btn-text">服务热线：02863852532</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyWOW>

        )
    }
}


export default Enterprise;