import React,{Component} from 'react'

export default class Footer extends Component{
    render() {
        return(
            <div className='footer-container'>
                <div className="footer-position">
                    <div className="footer1">
                        <div className="title"  style={{width:'100px'}}>
                            合作伙伴
                        </div>
                    </div>
                    <div className="footer2">
                        <div className="item item1">
                            <div className="title" style={{width:'100px'}}>联系我们</div>
                            <div className="item-box">
                                <div className="text text1">地址：成都市高新区吉泰五路88号香年广场T3栋14楼</div>
                                <div className="text text2">企业邮箱：sxx@studytodo.com</div>
                                <div className="text text2">企业QQ：<a href="tencent://message/?uin=2911512556&Site=qq&Menu=yes">800562942</a></div>
                            </div>
                            <div className="title" style={{width:'100px'}}>服务热线</div>
                            <div className="item1-hot">
                                <div className="phone">400-000-0000</div>
                                <div className="text">咨询时间：09 : 00 - 18 : 00</div>
                            </div>
                        </div>
                        <div className="item item2">
                            <div className="title">个人教育培训服务</div>
                            <div className="item-box">
                                <div className="text">名师原创课程</div>
                                <div className="text">模块学习</div>
                                <div className="text">参与校企合作项目</div>
                                <div className="text">推荐就业</div>
                            </div>
                        </div>
                        <div className="item item3">
                            <div className="title">高校校际间合作</div>
                            <div className="item-box">
                                <div className="text">共同搭建实训基地</div>
                                <div className="text">合作办学</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">政企合作</div>
                            <div className="item-box">
                                <div className="text">员工培养</div>
                                <div className="text">政企赋能</div>
                                <div className="text">企业内训</div>
                                <div className="text">双平台选择</div>
                            </div>
                        </div>
                        <div className="item" style={{marginLeft:'96px'}}>
                            <div className="title">关注公众号</div>
                            <div className='gongzhonghao'></div>
                            <div style={{marginTop:'22px',color:'#fff'}}>动态和资讯都在这里</div>
                        </div>

                    </div>
                    <div className="footer3">
                        <div className="title" style={{width:'100px'}}>
                            友情链接
                        </div>
                    </div>
                </div>
                <div className="footer">
                    Copyright ©2018 studytodo.com 成都思学行教育科技有限公司ICP备 18033964号
                </div>
            </div>
        )
    }
}