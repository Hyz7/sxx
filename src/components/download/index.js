import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import sxxImg from '../../images/sxxbanner.png'
class Download extends Component{
    constructor(){
        super()
        this.state={
            tabStatus:'paper',
            industry:false
        }
    }
    componentDidMount(){
        console.log(this.props)
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
                            <div className="list">
                                <img src="" alt=""/>
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
                                <img src="" alt=""/>
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
                                <img src="" alt=""/>
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
                                <img src="" alt=""/>
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
                                <img src="" alt=""/>
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
                        </div>
                        <div className="more-btn">加载更多...</div>
                    </div>
                    <div className="download-right">
                        <div className="title">
                            <div className="box">最新推荐</div>
                        </div>
                        <div className="list-box">
                            <div className="list">
                                <img src="" alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src="" alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src="" alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src="" alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src="" alt=""/>
                                <div className="content">
                                    <div className="title">SharesPost 项目投资者概览</div>
                                    <div className="description">2018年美国证监会对代币进行监管，多数会归为证券类...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <div className="btn prev-btn">上一篇：AAA全球应用联盟链白皮书</div>
                            <div className="btn next-btn">下一篇：SharesPost 项目投资者概览</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Download)