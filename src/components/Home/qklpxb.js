import React, {Component} from 'react';
import BG1 from '../../images/home/bg1.png'
import BG2 from '../../images/home/bg2.png'
import Employment from '../../images/home/employmentbg.png'
import banner from '../../images/home/qklbanner.png'
import amazon from '../../images/home/employment/amazon.png'
import baidu from '../../images/home/employment/baidu.png'
import bixiaobai from '../../images/home/employment/bixiaobai.png'
import lagou from '../../images/home/employment/lagou.png'
import lianbo from '../../images/home/employment/lianbo.png'
import lianchaguan from '../../images/home/employment/lianchaguan.png'
import lvmeng from '../../images/home/employment/lvmeng.png'
import shurong from '../../images/home/employment/shurong.png'
import wanwugongsuan from '../../images/home/employment/wanwugongsuan.png'
import wangxin from '../../images/home/employment/wangxin.png'
import wujilian from '../../images/home/employment/wujilian.png'
class Qklpxb extends Component {
    render() {
        return (
            <div className='qklpxb-container'>
                <div className="bannerBox">
                    <div className="banner">
                        <img src={banner} alt=""/>
                    </div>
                    <div className="signUp">
                        <div className='signUpBox'>
                            <div className="title">首期区块链中级架构师培训班&nbsp;&nbsp;&nbsp;&nbsp;前30报名学费 五折</div>
                            <div className="text1">时长：64学时 适合对象：进阶IT技术人员</div>
                            <a className="signUpButton" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                立即报名
                            </a>
                        </div>

                    </div>
                </div>
                <div className="introduction">
                    <div className="int-content">
                        <div className="text-content">
                            <div className="title">——为培养“紧缺型”区块链技术人才而设计</div>
                            <div className="text">
                                随着加密数字货币泡沫的覆灭，区块链底层技术迎来了稳定健康的发展，随着各行业对技术创新的跟进，相应的是技术人才的稀缺。在这样的情况下，成都思学行教育科技公司在充分调研区块链开源技术体系和区块链企业技术人才需求的基础上，在权威行业人士和信息技术教育学家指导下，创新性地首次在全国设计并研发了：区块链架构师系列课程，并将在2019年3月落地开展区块链中级架构师课程。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-box">
                    <img src={BG1} alt=""/>
                    <div className="content-title">
                            <div className="text">课程目标</div>
                    </div>
                    <div className="target-content">
                        <div className="list-box">
                            <span className='span1'></span>
                            <div className="text">全面了解以太坊、Hyperledger等区块链开源项目，以及Go语言的相关知识</div>
                        </div>
                        <div className="list-box">
                            <span className='span2'></span>
                            <div className="text">学习到如何通过Go语言编写程序、如何设计区块链、以及区块链开源项目的相关原理</div>
                        </div>
                        <div className="list-box">
                            <span className='span3'></span>
                            <div className="text">使得学生在价值互联网时代背景下的创新、创业具备相应的知识和素质</div>
                        </div>
                    </div>
                    <div className="content-title" style={{top:'490px'}}>
                        <div className="text">课程亮点</div>
                    </div>
                    <div className="lightPoint-content">
                        <div className="list-box">
                            <div className="title-box">
                                <span></span>
                                <div className='title' style={{lineHeight:'30px',marginTop:'17px'}}>电子科技大学桂勋教授 亲自授课 </div>
                                <div className="line"></div>
                                <div className="text">本期培训班课件由长期从事科研工作与项目建设的电子科大教授桂勋亲自研发并授课</div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="title-box">
                                <span></span>
                                <div className='title'>全新技术高薪就业蓝海</div>
                                <div className="line"></div>
                                <div className="text">全新技术，行业人才紧缺，掌握新技术更具备市场竞争力</div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="title-box">
                                <span></span>
                                <div className='title'>学员推荐就业</div>
                                <div className="line"></div>
                                <div className="text">在成都市大数据协会区块链专委会的指导下，思学行与多家区块链公司签订了人才培养输送协议，保障学生学有所成</div>
                            </div>
                        </div>
                        <div className="list-box">
                            <div className="title-box">
                                <span></span>
                                <div className='title'>顶级公司CEO面对面交流</div>
                                <div className="line"></div>
                                <div className="text">优秀学员可获得顶级公司CEO面对面交流机会，学习的同时，为未来积攒人脉</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-title" style={{top:'890px'}}>
                        <div className="text">就业方向</div>
                    </div>
                    <div className="employment-content">
                        <img src={Employment} alt=""/>
                        <div className='content-detail'>
                            <div className="employment-content-box">
                                <div className="text">
                                    就业不是单选项，<span>金融</span>、<span>物联网</span>、<span>能源互联网</span>等高薪行业的
                                </div>
                                <div className="text1">开发、运维、甚至市场都可成为你的选择</div>
                                <ul className="position">
                                    <li><span></span>区块链架构师</li>
                                    <li><span></span>区块链开发工程师</li>
                                    <li><span></span>区块链交易所CTO</li>
                                    <li><span></span>区块链研发工程师</li>
                                    <li><span></span>区块链技术专家</li>
                                    <li><span></span>区块链解决方案架构师</li>
                                    <li><span></span>区块链安全研究员</li>
                                    <li><span></span>区块链底层开发工程师</li>
                                    <li><span></span>区块链开发主程序员</li>
                                    <li><span></span>区块链安全研发工程师</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-title" style={{top:'1380px'}}>
                        <div className="text">企业合作</div>
                    </div>
                    <ul className="cooperation-content">
                        <ul>
                            <li><img src={amazon} alt=""/></li>
                            <li><img src={baidu} alt=""/></li>
                            <li><img src={lagou} alt=""/></li>
                            <li><img src={wujilian} alt=""/></li>
                            <li><img src={lianbo} alt=""/></li>
                        </ul>
                        <ul>
                            <li><img src={wanwugongsuan} alt=""/></li>
                            <li><img src={lvmeng} alt=""/></li>
                            <li><img src={wangxin} alt=""/></li>
                            <li><img src={shurong} alt=""/></li>
                            <li><img src={lianchaguan} alt=""/></li>
                        </ul>
                        <ul>
                            <li><img src={bixiaobai} alt=""/></li>
                        </ul>

                    </ul>
                    <div className="footerImage">
                        <img src={BG2} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Qklpxb;