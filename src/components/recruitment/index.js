import React, {PureComponent} from 'react'
import sxxImg from '../../images/sxxbanner.png'

export default class Recruitment extends PureComponent{
    state={
        tabStatus: '0',
        display: ''
    }

    handleChangeTab=(e)=>{
       this.setState({tabStatus:e.target.value})
    }
    render(){
        const {tabStatus}=this.state
        return (
            <div className="recruitment-container">
                <div className="recruitment-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="recruitment-content">
                    <div className='title'>人才招聘</div>
                    <div className="title-text">人尽其才 共同发展 </div>
                    <div className="recruitment-tab">
                        <ul className="tab-btn-group"  onClick={(e)=>{this.handleChangeTab(e)}}>
                            <li className={tabStatus=='0'?'active':null} value='0'>全部<span></span></li>
                            <li className={tabStatus=='1'?'active':null} value='1'>新媒体运营专员<span></span></li>
                            <li className={tabStatus=='2'?'active':null} value='2'>新媒体营销<span></span></li>
                            <li className={tabStatus=='3'?'active':null} value='3'>课程顾问<span></span></li>
                            <li className={tabStatus=='4'?'active':null} value='4'>项目执行<span></span></li>
                            <li className={tabStatus=='5'?'active':null} value='5'>产品助理<span></span></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="list">
                            WEB前段开发工程师
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiahaozhankai'></use>
                            </svg>
                        </div>
                        <div className="list-content">
                            <div className="box">
                                <div className="text">岗位职责:</div>
                                <div className="text">1.参与微信应用及WEBAPP的开发;</div>
                                <div className="text">2.与产品部和后台开发人员协作提供极高用户体验的前端产品;</div>
                                <div className="text">3.参与对外微营销的移动版网页/网站的设计开发；</div>
                            </div>
                            <div className="box" style={{marginTop:'40px'}}>
                                <div className="text">任职要求:</div>
                                <div className="text">1.专科以上学历，计算机相关专业，一年以上前端开发项目经验</div>
                                <div className="text">2.对WEB技术有相当经验（HTML5+CSS+JAVASCRIPT）;</div>
                                <div className="text">3.熟悉至少一种现代JAVASCRIPT框架类应用；</div>
                                <div className="text">4.有ANGULARJS＋IONIC开发经验优先；</div>
                                <div className="text">5.喜欢高效快速的创业氛围；</div>
                                <div className="text">6.有WEBAPP经验，熟悉相关框架；</div>
                            </div>
                        </div>
                        <div className="list">
                            WEB前段开发工程师
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiahaozhankai'></use>
                            </svg>
                        </div>
                        <div className="list">
                            WEB前段开发工程师
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiahaozhankai'></use>
                            </svg>
                        </div>
                        <div className="list">
                            WEB前段开发工程师
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiahaozhankai'></use>
                            </svg>
                        </div>
                        <div className="list">
                            WEB前段开发工程师
                            <svg className='icon-svg'>
                                <use xlinkHref='#icon-jiahaozhankai'></use>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
