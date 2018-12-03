import React, {PureComponent} from 'react'
import sxxImg from '../../images/sxxbanner.png'

export default class Recruitment extends PureComponent{
    state={
        tabStatus:'0'
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
                    <div className="tab-content"></div>
                </div>
            </div>
        )
    }
}
