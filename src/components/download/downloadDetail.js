import React,{Component} from 'react'

export default class DownloadDetail extends Component{
    render(){
        return(
            <div className='downloadDetail-container'>
                <div className="title">AAA全球应用联盟链白皮书</div>
                <div className="description">
                    <img src="" alt=""/>
                    <div className="content">
                        <div className="text">所属行业：移动互联网其他</div>
                        <div className="text">报告类型：免费报告</div>
                        <div className="text">页数：82</div>
                        <div className="text">图表：66</div>
                        <div className="text">价格：<span>¥0.00</span></div>
                        <div className="btn-box">
                            <div className="btn online-btn">
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-yanjing'></use>
                                </svg>
                                在线浏览
                            </div>
                            <div className="btn download-btn">
                                <svg className='icon-svg'>
                                    <use xlinkHref='#icon-xiazai'></use>
                                </svg>
                                下载资料
                            </div>
                        </div>
                        <div className="downloadNum">下载次数：20次</div>
                    </div>
                </div>
                <div className="introduction">
                    <div className="title"><span></span>资料简介</div>
                    <div className="content">
                        《2018年中国人工智能城市感受力指数报告》对人工智能城市的理念进行了概念拆解
                        和研究，从居民感受角度确定了安全、交通、医疗、生活办公、金融、零售、教育、
                        文娱八个细分场景，并搭建人工智能城市感受力指数模型，从AI需求指数、AI使用指
                        数和AI潜力值三方面调研典型城市居民在各个人工智能场景上的应用感知程度，进而
                        为人工智能在城市中的应用落地提出优化建议和挖掘新的机会与方向。
                    </div>
                </div>
                <div className="catalog">
                    <div className="title"><span></span>目录</div>
                    <div className="content"></div>
                </div>
            </div>
        )
    }
}