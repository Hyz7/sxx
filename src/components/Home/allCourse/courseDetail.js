import React, {Component} from 'react';

class CourseDetail extends Component {
    state={
        tabStatus:'induction',
    }
    render() {
        let {tabStatus}=this.state
        return (
            <div className='courseDetail-container'>
                <div className="position">
                    <div className="header-box">
                        <img src='' alt=""/>
                        <div className="content">
                            <div className="title">私有区块链，我们一起GO</div>
                            <div className="description">用Go语言实现一个区块链私有链</div>
                            <div className="type">视频课</div>
                            <div className="text">主讲老师：李维江</div>
                            <div className="text">观看次数：25004</div>
                            <div className="createTime">发布时间：2018-11-8 11：12</div>
                            <div className="price-box">
                                <div className="top">
                                    <div className="left">限量特惠  2018.11.20 ~ 2019.11.30</div>
                                    <div className="right">剩1865份 恢复原价</div>
                                </div>
                                <div className="bottom">
                                    <div className="text">活动价：<span>¥0.00</span></div>
                                    <s className="text">原件¥99.00</s>
                                </div>
                            </div>
                            <div className="tryWatch">立即购买</div>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="left">
                            <div className="title">
                                <span className={tabStatus=='induction'?'active':''} onClick={()=>{this.setState({tabStatus:'induction'})}}>介绍</span>
                                <span className={tabStatus=='catalogue'?'active':''} onClick={()=>{this.setState({tabStatus:'catalogue'})}}>目录</span>
                            </div>
                            {tabStatus=='induction'?
                            <div className="content">
                                <div className="title">适用人群</div>
                                <div className="description">
                                    每天被工作PPT所困扰的职场人~<br/>
                                    想要又快又好完成PPT制作，提前下班的人
                                </div>
                                <div className="title">课程概述</div>
                                <div className="description">
                                    <p>本课程是《跟宁哥学区块链开发》的项目实战课程，本系列课
                                        程包含了区块链和以太坊基础知识、Solidity语言详解、Web3.js详解、
                                        Truffle以太坊开发框架、项目实战（包括支持以太坊的微信小程序版记事
                                        本、用Electron实现的DApp云笔记、用Electron实现的DApp MySQL数据库管
                                        理系统【支持将数据保存到以太坊中】）</p>
                                    <p>【售前咨询，买课后加学员群下载资料】<br/>关注微信公众号“思学行教育”（PPT100），回复关键词【人工客服】就有人工客服接待哦~</p>

                                    <p>思学行教育团队2018年度黑马爆款课程，不到一年畅销超万人！！！<br/>
                                        本课程专注于提升职场人的办公效率，500强企业内训师带你解决与工作场景相关的程序疑难杂症！</p>

                                    【视频讲解】+【图文解析】+【配套习题】+【老师答疑】，四位一体，系统提升你的职场竞争力！<br/>

                                    课程不限时间，不限次数，一次购买， 永久有效，课程前两章为免费试看章节。
                                </div>
                            </div>
                             :null
                            }
                        </div>
                        <div className="right">
                            <div className="item item1">
                                <div className="title">主讲老师</div>
                                <img src="" alt=""/>
                                <div className="name">李维江</div>
                                <div className="description">从事金融、数据软件产品开发和运营，熟悉比特币和以太坊的源代码设计及技术开发。</div>
                            </div>
                            <div className="item item2">
                                <div className="title">课程介绍</div>
                                <div className="description">
                                    本课程是《跟宁哥学区块链开发》的项目实战课程，本系列课
                                    程包含了区块链和以太坊基础知识、Solidity语言详解、Web3.js详解、
                                    Truffle以太坊开发框架、项目实战（包括支持以太坊的微信小程序版记事
                                    本、用Electron实现的DApp云笔记、用Electron实现的DApp MySQL数据库管
                                    理系统【支持将数据保存到以太坊中】）
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetail;