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
                            <li className="list"><img src={require('../../images/footer/baidu.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/ali.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/asdc.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/dd.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/dianxin.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/dongruan.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/hw.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/jd.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/leshi.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/lg.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/sina.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/sougou.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/tencent.png')} alt=""/></li>
                            <li className="list"><img src={require('../../images/footer/toutiao.png')} alt=""/></li>
                        </ul>
                    </div>
                    <s style={{clear:'both',display:'block',height:'0'}}></s>
                    <div className="footer2">
                        <div className="item item1">
                            <div className="title" style={{width:'100px'}}>联系我们</div>
                            <div className="item-box">
                                <div className="text text1">地址：成都市高新区吉泰五路88号香年广场T3栋14楼</div>
                                <div className="text text2">企业邮箱：sxx@sixuexing.com</div>
                                <div className="text text2">企业QQ：
                                    {/*<a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes">2507819723</a>*/}
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        2507819723
                                    </a>
                                </div>
                            </div>
                            <ul className='footer-siteMap'>
                                <li><a href="http://sixuexing.com">首页</a></li>
                                <li><a href="http://sixuexing.com/core">核心优势</a></li>
                                <li><a href="http://sixuexing.com/teacher">授课导师</a></li>
                                <li><a href="http://sixuexing.com/sixuexing">思学行动态</a></li>
                                <li><a href="http://sixuexing.com/download">资料下载</a></li>
                                <li><a href="http://sixuexing.com/recruitment">人才招聘</a></li>
                                <li><a href="http://sixuexing.com/aboutUs">关于我们</a></li>
                                <li><a href="http://sixuexing.com/contactUs">联系我们</a></li>
                            </ul>
                        </div>
                        <div className="item item2">
                            <div className="title" style={{width:'100px'}}>服务热线</div>
                            <div className="item1-hot">
                                <div className="phone">028-8525-3153</div>
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
                            友情链接(友链交换QQ：2507819723)
                        </div>
                        <ul className="box">
                            <li><a href="http://app.sxwlwq.com/?baidu21&e_keywordid=100694692077&e_keywordid2=100694692077&b_scene_zt=1&audience=428417">西安APP开发</a></li>
                            <li><a href="http://zt.epwk.com/1809appkaifa/?epi=1443298&utm_source=pc-bd&utm_medium=cpc&utm_campaign=87291794&utm_content=3224851895&utm_term=%E8%B4%B5%E9%98%B3APP%E5%BC%80%E5%8F%91">贵阳APP开发</a></li>
                            <li><a href="http://www.cdlchd.com/?bd-html5jh-html5yxkf-h5%D3%CE%CF%B7%BF%AA%B7%A2">h5游戏开发</a></li>
                            <li><a href="http://www.ydwzxc.com/">上海大众搬家公司</a></li>
                            <li><a href="https://tf.zbj.com/v/pc/yingxiao?pmcode=121125739&utm_source=baidu&utm_medium=SEM">SEO排名软件</a></li>
                            <li><a href="http://www.yishenzhou.com/">网络危机处理</a></li>
                            <li><a href="http://www.xuejianzhan.com/">建站技术网</a></li>
                            <li><a href="http://www.linsenad.cn/">东营网站建设</a></li>
                            <li><a href="http://www.mydown.com/soft/273/525443773.shtml">腾讯视频下载</a></li>
                            <li><a href="http://cd.site.xiniu.com/?audience=518694">网站建设</a></li>
                            <li><a href="http://www.cdlchd.com/">h5游戏开发</a></li>
                            <li><a href="https://tf.zbj.com/v/pc/yingxiao">SEO排名软件</a></li>
                            <li><a href="http://www.yishenzhou.com/">网络危机处理</a></li>
                            <li><a href="http://www.ydwzxc.com/">上海大众搬家公司</a></li>
                            <li><a href="https://www.weixinqun.com/group?t=41">微信群</a></li>
                            <li><a href="http://cd.site.xiniu.com/">建站技术网</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    Copyright ©2018 <a href="http://www.sixuexing.com">sixuexing.com</a> 成都思学行教育科技有限公司<a href="http://sixuexing.com/sitemap.xml">sitemap.xml</a><a href="http://www.miitbeian.gov.cn">蜀ICP备18033964号</a>
                </div>
            </footer>
        )
    }
}