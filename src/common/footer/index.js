import React,{Component} from 'react'
import GZH from '../../images/publicNum.png'
export default class Footer extends Component{
    render() {
        return(
            <footer className='footer-container'>
                <div className="footer-position">
                    <div className="footer1">
                        <div className="title"  style={{width:'100px'}}>
                            合作伙伴
                        </div>
                        <ul className="partner">
                            <li className="list"><div className="list1 bg"></div></li>
                            <li className="list"><div className="list2 bg"></div></li>
                            <li className="list"><div className="list3 bg"></div></li>
                            <li className="list"><div className="list4 bg"></div></li>
                            <li className="list"><div className="list5 bg"></div></li>
                            <li className="list"><div className="list6 bg"></div></li>
                            <li className="list"><div className="list7 bg"></div></li>
                            <li className="list"><div className="list8 bg"></div></li>
                            <li className="list"><div className="list9 bg"></div></li>
                            <li className="list"><div className="list10 bg"></div></li>
                        </ul>
                    </div>
                    <div className="footer2">
                        <div className="item item1">
                            <div className="title" style={{width:'100px'}}>联系我们</div>
                            <div className="item-box">
                                <div className="text text1">地址：成都市高新区吉泰五路88号香年广场T3栋14楼</div>
                                <div className="text text2">企业邮箱：sxx@studytodo.com</div>
                                <div className="text text2">企业QQ：<a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes">2507819723</a></div>
                            </div>

                        </div>
                        <div className="item item2">
                            <div className="title" style={{width:'100px'}}>服务热线</div>
                            <div className="item1-hot">
                                <div className="phone">400-000-0000</div>
                                <div className="text">咨询时间：09 : 00 - 18 : 00</div>
                            </div>
                        </div>
                        <div className="item" style={{marginLeft:'96px'}}>
                            <div className="title">关注公众号</div>
                            <div className='gongzhonghao'>
                                <img src={GZH} alt=""/>
                            </div>
                            <div style={{marginTop:'22px',color:'#fff'}}>动态和资讯都在这里</div>
                        </div>
                    </div>
                    <div className="footer3">
                        <div className="title" style={{width:'100px'}}>
                            友情链接（友链交换QQ：2507819723）
                        </div>
                        <ul className="box">
                            <li>西安APP开发</li>
                            <li>贵阳APP开发</li>
                            <li>h5游戏开发</li>
                            <li>上海大众搬家公司</li>
                            <li>SEO排名软件</li>
                            <li>网络危机处理</li>
                            <li>建站技术网</li>
                            <li>东营网站建设</li>
                            <li>腾讯视频下载</li>
                            <li>网站建设</li>
                            <li>h5游戏开发</li>
                            <li>SEO排名软件</li>
                            <li>网络危机处理</li>
                            <li>上海大众搬家公司</li>
                            <li>微信群</li>
                            <li>建站技术网</li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    Copyright ©2018 <a href="http://www.sixuexing.com">sixuexing.com</a> 成都思学行教育科技有限公司<a href="http://www.miitbeian.gov.cn">蜀ICP备18033964号</a>
                </div>
            </footer>
        )
    }
}