import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import DownloadDetail from './downloadDetail.js'
import sxxImg from '../../images/sxxbanner.png'
/*import AAA from '../../images/download/AAA.png'
import HMS from '../../images/download/HMS.png'
import IBM from '../../images/download/IBM.png'
import MATRIX from '../../images/download/MATRIX.png'
import sharespost from '../../images/download/sharespost.png'
import xgh from '../../images/download/xgh.png'
import zq from '../../images/download/zq.png'*/
import FloatWin from '../../common/floatWindow'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import uniqueId from 'lodash/uniqueId'
class Download extends Component{
    constructor(){
        super()
        this.state={
            tabStatus:'paper',
            industry:false
        }
    }
    componentDidMount(){
        this.props.getDownloadList(1,10)
    }
    changeTab=(type)=>{
        this.setState({tabStatus:type})
    }
    handleIndustry=(bool)=>{
        this.setState({industry:bool})
    }
    render() {
        let { tabStatus,industry } = this.state
        return(
            <div className='download-container'>
                <FloatWin />
                <div className="download-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="download-content">
                    <div className="download-left">
                        <div className="tab-box">
                            <ul>
                                <li className={tabStatus=='paper'?'active':''} onClick={()=>{this.changeTab('paper')}}>白皮书</li>
                                <li className={tabStatus=='media'?'active':''} onClick={()=>{this.changeTab('media')}}>视频</li>
                                <li className={tabStatus=='tutorial'?'active':''} onClick={()=>{this.changeTab('tutorial')}}>教程</li>
                            </ul>
                            <div className="select-box">
                                <div className='title'>筛选条件</div>
                                <div className='title' onMouseOver={()=>{this.handleIndustry(true)}} onMouseLeave={()=>{this.handleIndustry(false)}}>
                                    行业选择
                                    {industry?
                                        <ul>
                                            <li>区块链</li>
                                            <li>人工智能</li>
                                            <li>物联网</li>
                                            <li>大数据</li>
                                            <li>云计算</li>
                                            <li>智能物联网</li>
                                            <li>全栈软件测试</li>
                                        </ul>
                                    :null}
                                </div>
                                <div className='title'>
                                    发布时间
                                </div>
                            </div>
                        </div>
                        <div className="list-box">
                            {this.props.downloadList?this.props.downloadList.map(item=>{
                                return (
                                    <Link to={'/download/detail/'+item.dataId} className="list" key={uniqueId()}>
                                        <img src={item.image} alt=""/>
                                        <div className="content">
                                            <div className="title">{item.dataTitle}</div>
                                            <div className="description" dangerouslySetInnerHTML={{__html:item.dataDesc?item.dataDesc:null}}>
                                            </div>
                                            <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数{item.downloadCount}</span></div>
                                            <div className="download-btn">立即下载</div>
                                        </div>
                                    </Link>
                                )
                            }):null}
                             {/*<div className="list">
                                <img src={AAA} alt=""/>
                                <div className="content">
                                    <div className="title">AAA全球应用联盟链白皮书</div>
                                    <div className="description">
                                        基于区块链技术重构App的生产关系，将每个App用户变为股东。
                                        通过App红包等方式巩固用户对AAA Coin的使用粘性，持续培养用户交易能力。
                                        联盟全球所有中小规模App，在整合后的庞大用户体量上，共享技术，
                                        共享用户价值红利。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={sharespost} alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">
                                        2018年美国证监会对代币进行监管，多数会归为证券类，SharesPost会成为美国第一家合规的证券类代币的交易平台。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={IBM} alt=""/>
                                <div className="content">
                                    <div className="title">IBM物联网白皮书：设备民主</div>
                                    <div className="description">
                                        IBM 作为一家全球性的电子企业，理解高科技行业正面临的问题，和为保持繁荣所需要的不
                                        断变革。在整个电子行业，所有的企业正在将注意力从智能手机和平板领域，
                                        转移到新一代的可连接设备，这不仅会变革电子行业，而且还会对其它行业产生深远的影响。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={xgh} alt=""/>
                                <div className="content">
                                    <div className="title">Weridfoxes小怪狐白皮书</div>
                                    <div className="description">
                                        这是一款即兼顾了投资价值，也有浓重的宠物趣味性和互动性的游戏，是一款真正能让用户从心里喜欢，长久陪伴的宠物。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={MATRIX} alt=""/>
                                <div className="content">
                                    <div className="title">MATRIX 人工智能项目白皮书</div>
                                    <div className="description">
                                        MATRIX 历史性地将人工智能技术和区块链技术全方位融合
                                        ，涵盖了链上参数、共识算法、智能合约、应用服务等各个方面。MATRIX 团
                                        队作为人工智能区块链的首创者和践行者，目标是通过 MATRIX 正式定
                                        义下一代区块链技术，即区块链 3.0。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={zq} alt=""/>
                                <div className="content">
                                    <div className="title">兴业证券：平安加盟N3，中国正式登上区块链国际舞台</div>
                                    <div className="description">
                                        R3是目前世界上知名度最高的区块链联盟之一，已经有超过40家金融机构
                                        加入该组织，其中包括摩根大通、高盛、花旗银行、美林证券、瑞士信贷、丹麦银行、德
                                        意志银行等金融巨头。此次平安与R3的合作，是中国大型金融机构首次加入国际区块链联盟。
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={HMS} alt=""/>
                                <div className="content">
                                    <div className="title">HMS健康互助社区白皮书</div>
                                    <div className="description">
                                        健康保障，是全人类的刚需问题。几乎所有家庭都担心巨额的危重疾病治疗费用和丧失劳动能力
                                        的收入损失压垮整个家庭，目前解决途径主要有三种：商业保险、相互保险、互助社区。这些方
                                        案都存在着诸多本质痛点，强烈压抑着用户的需求。
                                        若出现一种可解决这些痛点的变革，刚需将得到释放，用户必然爆发式增长
                                    </div>
                                    <div className="bottom-text">标签：交易平台    数字钱包 <span>下载次数18</span></div>
                                    <div className="download-btn">立即下载</div>
                                </div>
                            </div>*/}
                        </div>
                        {/*<div className="more-btn">加载更多...</div>*/}
                    </div>
                    <div className="download-right">
                        <div className="title">
                            <div className="box">最新推荐</div>
                        </div>
                        <div className="list-box">
                            {this.props.downloadList?this.props.downloadList.slice(0,5).map(item=>{
                                return <Link className="list"  to={'/download/detail/'+item.dataId} key={uniqueId()}>
                                    <img src={item.image} alt=""/>
                                    <div className="content">
                                        <div className="title">{item.dataTitle}</div>
                                        <div className="description" dangerouslySetInnerHTML={{__html:item.dataDesc?item.dataDesc.length>20?item.dataDesc.substring(0,20)+'...':item.dataDesc:null}}></div>
                                        <div className="time">{item.createTime}</div>
                                    </div>
                                </Link>
                            }):null}

                            {/*<div className="list">
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
                                    <div className="title">MATRIX 人工智能项目白皮书
                                        第十七届西博会</div>
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
                            </div>*/}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    downloadList:state.download.list
})
const mapDispatchToProps=(dispatch)=>({
    getDownloadList(page,size){
        dispatch(actionCreators.getDownloadList(page,size))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Download))