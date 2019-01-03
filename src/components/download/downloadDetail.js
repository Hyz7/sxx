import React,{Component} from 'react'
import FloatWin from "../../common/floatWindow";
import {Modal} from 'antd'
import sxxImg from "../../images/sxxbanner.png";
import sharespost from "../../images/download/sharespost.png";
import IBM from "../../images/download/IBM.png";
import xgh from "../../images/download/xgh.png";
import MATRIX from "../../images/download/MATRIX.png";
import zq from "../../images/download/zq.png";
import * as actionCreators from "../download/store/actionCreators";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import uniqueId from 'lodash/uniqueId'
class DownloadDetail extends Component{
    state = { visible: false }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    componentDidMount() {
        this.props.getDownloadInfo(this.props.location.pathname.substring(17))
        this.props.getDownloadList()
    }

    render(){
        const {downloadInfo}=this.props
        return(
            <div className='download-container'>
                <FloatWin />
                <div className="download-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="download-content">
                    <div className='downloadDetail-container'>
                        <Modal title={downloadInfo.dataTitle?downloadInfo.dataTitle:null} visible={this.state.visible}
                               onOk={this.handleOk} onCancel={this.handleCancel}
                        >
                            <a href={this.props.downloadFile?this.props.downloadFile:null} onClick={this.handleCancel}>文件下载</a>
                        </Modal>
                        <div className="title">{downloadInfo.dataTitle?downloadInfo.dataTitle:null}</div>
                        <div className="description">
                            <img src={downloadInfo.image?downloadInfo.image:null} alt=""/>
                            <div className="content">
                                <div className="text">所属行业：{downloadInfo.industry}</div>
                                <div className="text">报告类型：{downloadInfo.fileType?downloadInfo.fileType:'暂无文件类型'}</div>
                                <div className="text">更新日期：{downloadInfo.createTime?downloadInfo.createTime:null}</div>
                                {/*<div className="text">图表：66</div>*/}
                                <div className="text">价格：<span>¥{downloadInfo.price}</span></div>
                                <div className="btn-box">
                                    <div className="btn online-btn">
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-yanjing'></use>
                                        </svg>
                                        在线浏览
                                    </div>
                                    <div className="btn download-btn" onClick={()=>{
                                        this.props.getDownloadFile(downloadInfo.dataId)
                                        this.setState({visible: true});
                                    }}>
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-xiazai'></use>
                                        </svg>
                                        下载资料
                                    </div>
                                </div>
                                <div className='downloadNum'>下载次数：{downloadInfo.downloadCount?downloadInfo.downloadCount:null}</div>
                            </div>
                        </div>
                        <div className="introduction">
                            <div className="title"><span></span>资料简介</div>
                            <div className="content" dangerouslySetInnerHTML={{__html:downloadInfo.dataDesc?downloadInfo.dataDesc:null}}></div>
                        </div>
                        {/*<div className="catalog">
                            <div className="title"><span></span>目录</div>
                            <div className="content"></div>
                        </div>*/}
                    </div>

                    <div className="download-right">
                        <div className="title">
                            <div className="box">最新推荐</div>
                        </div>
                        <div className="list-box">
                            <div className="list">
                                <img src={sharespost} alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={IBM} alt=""/>
                                <div className="content">
                                    <div className="title">IBM物联网白皮书：设备民主</div>
                                    <div className="description">IBM 作为一家全球性的电子企业，理解高科技行业正面临的问题...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={xgh} alt=""/>
                                <div className="content">
                                    <div className="title">Weridfoxes小怪狐白皮书</div>
                                    <div className="description">IBM 作为一家全球性的电子企业，理解高科技行业正面临的问题...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={MATRIX} alt=""/>
                                <div className="content">
                                    <div className="title">MATRIX 人工智能项目白皮书 第十七届西博会</div>
                                    <div className="description">MATRIX 历史性地将人工智能技术和区块链技术全方位融合...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={zq} alt=""/>
                                <div className="content">
                                    <div className="title">兴业证券：平安加盟N3...</div>
                                    <div className="description">R3是目前世界上知名度最高的区...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                        </div>
                        {this.props.downloadList.map((item,index)=>{
                            if(this.props.location.pathname.substring(17)==item.dataId){
                                return (
                                    <div className="btn-box" key={uniqueId()}>
                                        <div className="btn prev-btn noSelectText" onClick={()=>{this.handleChangePage(this.props.downloadList[index-1].dataId)}}>上一篇：<div>{this.props.downloadList[index-1]?this.props.downloadList[index-1].dataTitle:'无上一篇'}</div></div>
                                        <div className="btn next-btn noSelectText" onClick={()=>{this.handleChangePage(this.props.downloadList[index+1].dataId)}}>下一篇：<div>{this.props.downloadList[index+1]?this.props.downloadList[index+1].dataTitle:'无下一篇'}</div></div>
                                    </div>
                                )
                            }
                        })}
                        {/*<div className="btn-box">
                            <div className="btn prev-btn">上一篇：AAA全球应用联盟链白皮书</div>
                            <div className="btn next-btn">下一篇：SharesPost 项目投资者概览</div>
                        </div>*/}
                    </div>
                </div>
            </div>

        )
    }
    handleChangePage=(id)=>{
        this.props.getDownloadInfo(id)
        this.props.history.replace('/download/detail/'+id)
    }
}

const mapStateToProps=(state)=>({
    downloadList:state.download.list,
    downloadInfo:state.download.downloadInfo,
    downloadFile:state.download.downloadFile
})
const mapDispatchToProps=(dispatch)=>({
    getDownloadInfo(id){
        dispatch(actionCreators.getDownloadInfo(id))
    },
    getDownloadList(){
        dispatch(actionCreators.getDownloadList())
    },
    getDownloadFile(id){
        dispatch(actionCreators.getDownloadFile(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DownloadDetail))