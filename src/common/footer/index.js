import React,{Component} from 'react'
import GZH from '../../images/publicNum.png'
import ZWH from '../../images/ZWH.jpg'
import douyin from '../../images/footer/douyin.png'
import weibo from '../../images/footer/weibo.png'

export default class Footer extends Component{
    render() {
        return(
            <footer className='footer-container'>
                <div className="footer-position">

                    <div className="footer2" >
                        <div className="item item1" style={{flex:'5'}}>
                            <div className="title" style={{width:'100px'}}>联系我们</div>
                            <div className="item-box">
                                <div className="text text1" style={{lineHeight:'24px'}}>地址：四川省-成都市武侯区府城大道西段399号天府新谷10号楼20层</div>
                                <div className="text text2">企业邮箱：sxx@sixuexing.com</div>
                                <div className="text text2">企业QQ：
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        2507819723
                                    </a>
                                </div>
                            </div>
                            <ul className='footer-siteMap'>
                                <li><a href="http://sixuexing.com">首页</a></li>
                                <li><a href="http://sixuexing.com/allCourse">免费课程</a></li>
                                <li><a href="http://sixuexing.com/teacher">授课导师</a></li>
                                <li><a href="http://sixuexing.com/sixuexing">思学行动态</a></li>
                                <li><a href="http://sixuexing.com/aboutUs">联系我们</a></li>
                            </ul>
                        </div>
                        <div className="item item2" style={{marginLeft:'100px'}}>
                            <div className="title" style={{width:'100px'}}>服务热线</div>
                            <div className="item1-hot">
                                <div className="phone">028-6385-2532</div>
                                <div className="text">咨询时间：09 : 00 - 18 : 00</div>
                            </div>
                        </div>
                        <div className="item" >
                            <div className="title">关注公众号</div>
                            <div className="item-content">
                                <div className="box">
                                    <div className='gongzhonghao'>
                                        <img src={GZH} alt=""/>
                                    </div>
                                    <div style={{marginTop:'22px',color:'#fff'}}>思学行公众号</div>
                                </div>
                                <div className="box">
                                    <div className='gongzhonghao'>
                                        <img src={ZWH} alt=""/>
                                    </div>
                                    <div style={{marginTop:'22px',color:'#fff'}}>区块链沙龙汇公众号</div>
                                </div>
                            </div>

                        </div>
                        <div className="item" style={{padding:"80px 0 0 60px"}}>
                            <div className="list">
                                <img src={douyin} style={{width:'20px',height:'20px',marginRight:'25px'}} alt=""/>
                                ID:2221277103
                            </div>
                            <div className="list">
                                <img src={weibo} style={{width:'25px',height:'20px'}} alt=""/>
                                思学行教育
                            </div>
                        </div>
                    </div>
                    <div className="footer3">
                        <div className="title" style={{width:'100px'}}>
                            友情链接(友链交换QQ：2507819723)
                        </div>
                        <ul className="box">
                            <li><a href="http://www.scu.edu.cn/">四川大学</a></li>
                            <li><a href="https://www.uestc.edu.cn/">四川电子科技大学</a></li>
                            <li><a href="http://www.cdut.edu.cn/default.html">成都理工</a></li>
                            <li><a href="https://tf.zbj.com/v/pc/yingxiao?pmcode=121125739&utm_source=baidu&utm_medium=SEM">成都孵化园</a></li>
                            <li><a href="http://www.scujcc.cn/">四川大学锦城学院</a></li>
                            <li><a href="http://www.cduestc.cn/">电子科技大学成都学院</a></li>
                            <li><a href="https://www.cdu.edu.cn/">成都学院</a></li>
                            <li><a href="http://www.swust.edu.cn/?tdnkbjjzfbzrihfk">西南科技大学</a></li>
                            <li><a href="https://www.sicnu.edu.cn/">四川师范大学</a></li>
                            <li><a href="https://www.sicau.edu.cn/">四川农业大学</a></li>
                            <li><a href="https://www.swjtu.edu.cn/">西南交通大学</a></li>
                            <li><a href="https://www.cdu.edu.cn/">成都大学</a></li>
                            <li><a href="https://www.swpu.edu.cn/">西南石油大学</a></li>
                            <li><a href="https://www.xhu.edu.cn/">西华大学</a></li>
                            <li><a href="https://www.cdivtc.com/">成都工业职业技术学院</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    Copyright ©2019 <a href="https://www.sixuexing.com">sixuexing.com</a> 成都思学行教育科技有限公司<a href="http://www.miitbeian.gov.cn">蜀ICP备18033964号</a>
                </div>
            </footer>
        )
    }
}