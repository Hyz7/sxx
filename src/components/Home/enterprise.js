import React, { Component } from 'react';
import enterprise from '../../images/server/enterprise.png'
class Enterprise extends Component {
    render(){
        return (
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
                                <div className="text">政企合作</div>
                            </div>
                        </div>

                        <div className="item-list-box">
                            <div className="item-text">以新技术产业人才培养为核心，以“推动区块链等前沿科技落地应用，推动数字经济与实体经济深度融合”为己任，完善教育生态，积极助力培育各区域、各产业经济发展新动能</div>
                            <div className="content content3">
                                <div className="list">
                                    <div className="icon"></div>
                                    <span>员工培养</span>
                                    提供新一代信息技术人才的培训和认证、新一代信息技术运营与管理人才的培训和认证、新一代信息技术社会知识普及型教育
                                </div>
                                <div className="list">
                                    <div className="icon"></div>
                                    <span>政企赋能</span>
                                    进行企业家和高管培训、企业专项定制人才培养、业务专项战略咨询、企业专项资源对接
                                </div>
                                <div className="list">
                                    <div className="icon"></div>
                                    <span>企业内训</span>
                                    明确企业培训目标，严格把控课程设置、授课讲师、授课时间等相关问题，精准匹配企业需求
                                </div>
                                <div className="list">
                                    <div className="icon"></div>
                                    <span>双平台选择</span>
                                    提供线上教学平台学习和线下实训双模式培养，企业可根据自身需要进行选择
                                </div>
                            </div>
                            <div className="btn-box">
                                <div className="online-btn">在线咨询</div>
                                <div className="btn-text">服务热线：13885462898</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Enterprise;