import React, { Component } from 'react';
import SelfImg from '../../../images/server/self.png'
import MyWOW from "../../../common/wow";
class Self extends Component {
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
                                <img src={SelfImg} alt=""/>
                                <div className="theme">
                                    <div className="num">1</div>
                                    <div className="text">个人教育培训服务</div>
                                </div>
                            </div>

                            <div className="item-list-box">
                                <div className="item-text">帮助各行各业有志于从事新一代信息技术产业应用的学员，扎实技术前沿，把握时代的机遇。</div>
                                <div className="content content1">
                                    <div className="list">
                                        <div className="icon icon1"></div>
                                        <span>名师原创课程</span>
                                        由顶尖高校教师根据最新技术课程研发，紧跟时代，快速迭代
                                    </div>
                                    <div className="list">
                                        <div className="icon icon2"></div>
                                        <span>模块学习</span>
                                        通过参与多个精心设计的实战项目，全面掌握新一代信息开发技术
                                    </div>
                                    <div className="list">
                                        <div className="icon icon3"></div>
                                        <span> 参与校企合作项目</span>
                                        参加与高校、企业合作的项目，完成学分拿到OFFER
                                    </div>
                                    <div className="list">
                                        <div className="icon icon4"></div>
                                        <span>推荐就业</span>
                                        定期开展双选会、上门招聘等活动，保证学员就业
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <div className="online-btn">在线咨询</div>
                                    <div className="btn-text">服务热线：02885253153</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyWOW>

        )
    }
}


export default Self;