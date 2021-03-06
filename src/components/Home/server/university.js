import React, { Component } from 'react';
import university from '../../../images/server/university.png'
import MyWOW from "../../../common/wow";
class University extends Component {
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
                                <img src={university} alt=""/>
                                <div className="theme">
                                    <div className="num">2</div>
                                    <div className="text">实训基地</div>
                                </div>
                            </div>

                            <div className="item-list-box">
                                <div className="item-text">加强学校与用人单位的合作，方便双方更好地了解高校毕业生就业市场的供需状况，有效促进毕业生顺利就业和更好地服务用人单位。</div>
                                <div className="content content2">
                                    <div className="list">
                                        <div className="icon icon1"></div>
                                        <div className="box">
                                            <span>共同搭建实训基地</span>
                                            依靠思学行良好的师资、培训课程、教学管理经验，以及对国内外先进的新一代信息技术的快速了解，为毕业生开展技能培训和实训
                                        </div>
                                    </div>
                                    <div className="list">
                                        <div className="icon icon2"></div>
                                        <div className="box">
                                            <span>合作办学</span>
                                            平台本着"不求所有、但求所用”的原则，利用思学行的资源优势，与高校一起构建完善的教育资源服务体系
                                        </div>
                                    </div>
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


export default University;