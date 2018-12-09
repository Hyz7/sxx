import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import NewsDetail from './newsDetail.js'
import first from '../../images/sxx/first.png'
import second from '../../images/sxx/second.png'
import third from '../../images/sxx/third.png'
import xibo from '../../images/sxx/xibo.png'
import cansai from '../../images/sxx/cansai.png'
import huang from '../../images/sxx/huang.png'
import erdengjiang from '../../images/sxx/erdengjiang.png'
import sxxImg from '../../images/sxxbanner.png'
import * as actionCreators from "../sixuexing/store/actionCreators";
import lodashId from "lodash/uniqueId";

class Sxx extends Component{
    componentDidMount(){
        this.props.getNewsList()
    }

    render() {
        return(
            <div className='sxx-container'>
                <div className="sxx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="sxx-content">
                    <div className="search">
                        <input type="text" placeholder='请输入你想要查找的数据'/>
                        <div className="searchBtn">搜索</div>
                    </div>
                    {/*<NewsDetail />*/}
                    <div className="sxx-box sxx-news">
                        <div className="sxx-title">
                            <span></span>
                            新闻资讯
                        </div>
                        <ul className='news-list'>
                            {this.props.newsList.map((item)=>{
                                return (
                                    <li key={lodashId()} >
                                        <img src={item.imgUrl}></img>
                                        <Link to={'/detail/'+item.id}>
                                        <div className="news-content">
                                            <div className="list-title">{item.title}</div>
                                            <div className="description">{item.content}</div>
                                            <div className="time">{item.createTime}</div>
                                        </div>
                                        </Link>
                                    </li>
                                )
                            })}
                            {/*<li>
                                <img src={third} alt=""/>
                                <div className="news-content">
                                    <div className="list-title">第三期 成都区块链企业沙龙成功举办</div>
                                    <div className="description">11月8日下午，第三期成都区块链企业沙龙在银泰in99梦想加举行。 本期沙龙由成都市大数据协会区块链专委会主办，由拉勾网承办，亚马逊云计算、
                                        思学行教育、金惠智融、链立方学院、中云科技协办...</div>
                                    <div className="time">2018-11-8</div>
                                </div>
                            </li>
                            <li>
                                <img src={second}></img>
                                <div className="news-content">
                                    <div className="list-title">“区块链的发展与合作”成都区块链企业沙龙第二期成功举办</div>
                                    <div className="description">10月19日下午，第二期成都区块链企业沙龙在天府软件园举行。
                                        本期活动由成都市大数据协会区块链专委会主办，链博科技有限公司、VENA NETWORK承办......</div>
                                    <div className="time">2018-10-29</div>
                                </div>
                            </li>
                            <li>
                                <img src={first} alt=""/>
                                <div className="news-content">
                                    <div className="list-title">首期成都区块链企业沙龙线下聚会活动成功举办</div>
                                    <div className="description">9月28日下午，由成都市大数据协会区块链专委会组织的首期“成都区块链企业沙龙线下聚会活动”在成都软件园优聚+孵化器举办......</div>
                                    <div className="time">2018-9-28</div>
                                </div>
                            </li>
                            <li>
                                <img src={xibo} alt=""/>
                                <div className="news-content">
                                    <div className="list-title">“链接新时代，培养新人才”成都思学行教育亮相
                                        第十七届西博会</div>
                                    <div className="description">第十七届中国西部国际博览会以“中国新时代西部新作为”为主题，于2018年9月20日至24日在四川成都举办。“中国西部数字经济展”作为.....</div>
                                    <div className="time">2018-9-24</div>
                                </div>
                            </li>
                            <li>
                                <img src={xibo} alt=""/>
                                <div className="news-content">
                                    <div className="list-title">“链接新时代，培养新人才”成都思学行教育亮相
                                        第十七届西博会</div>
                                    <div className="description">第十七届中国西部国际博览会以“中国新时代西部新作为”为主题，于2018年9月20日至24日在四川成都举办。“中国西部数字经济展”作为.....</div>
                                    <div className="time">2018-9-24</div>
                                </div>
                            </li>*/}
                        </ul>
                    </div>
                    <div className="sxx-box sxx-industry">
                        <div className="sxx-title">
                            <span></span>
                            行业动态
                        </div>
                        <div className="industry-content">
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【知识库】行业资讯第一篇：易观：2018中国区块链应用专题分析</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】区块链在列 ｜ 大数据未来七大发展方向</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】人工智能，描绘万物互联的未来</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】区块链+AI，恰似双剑合璧？</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【新华社】习近平：推动我国新一代人工智能健康发展</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【人民日报】智能网呼唤“全链安防”</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【知识库】行业资讯第一篇：易观：2018中国区块链应用专题分析</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】区块链在列 ｜ 大数据未来七大发展方向</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】人工智能，描绘万物互联的未来</div>
                            </div>
                            <div className="industry-list">
                                <span></span>
                                <div className="text">【百度】区块链+AI，恰似双剑合璧？</div>
                            </div>
                        </div>
                    </div>
                    <div className="sxx-box sxx-student">
                        <div className="sxx-title">
                            <span></span>
                            学员动态
                        </div>
                        <ul className='student-list'>
                            <li>
                                <div className="box"><img src={cansai} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">区块链课程学员参赛</div>
                                    <div className="description">桂勋老师带领学员参加由工信部指导的“首届全国区块链开发大赛”并荣获二等奖</div>
                                    <div className="time">2018-9-28</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={huang} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">“区块链体验课“学员采访</div>
                                    <div className="description">黄同学：试过，才知道自己有多厉害！！</div>
                                    <div className="time">2018-9-10</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={erdengjiang} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">区块链开发大赛二等奖</div>
                                    <div className="description">学员的努力和汗水！</div>
                                    <div className="time">2018-9-28</div>
                                </div>
                            </li>
                            <li>
                                <div className="box"><img src={third} alt=""/></div>
                                <div className="news-content">
                                    <div className="list-title">“区块链体验课“顺利开展</div>
                                    <div className="description">区块链第一课，在天府新谷顺利开展</div>
                                    <div className="time">2018-9-10</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    newsList:state.sixuexing.newsList
})

const mapDispatchToProps=(dispatch)=>({
    getNewsList(){
        dispatch(actionCreators.getNewsList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sxx))