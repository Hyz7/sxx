import React,{Component} from 'react'
import sxxImg from '../../images/sxxbanner.png'
class Teacher extends Component{
    render() {
        return(
            <div className='teacher-container'>
                <div className="teacher-banner">
                    <img src={sxxImg} alt=""/>
                </div>

                <div className="teacher-position">
                    <ul className="scrollNav">
                        <li>全部讲师<span></span></li>
                        <li>区块链<span></span></li>
                        <li>AI人工智能<span></span></li>
                        <li>大数据<span></span></li>
                        <li>新一代网络安全<span></span></li>
                        <li>云计算<span></span></li>
                        <li>智能物联网<span></span></li>
                        <li>全栈软件测试<span></span></li>
                    </ul>
                    <div className="teacher-list">
                        <div className="teacher-title">专家大牛全程面授</div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>张小松<span>XiaoSong Zhang</span></div>
                                <div className="position">教务资深顾问</div>
                                <div className="box">
                                    <div className="text">长江学者特聘教授</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>网络安全、大数据应用、区块链</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。长期致力于网络信息技术安全领域的基础研究和技术攻关，成果在应用中取得重要的社会和经济效益。</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>桂勋<span>Xun Gui</span></div>
                                <div className="position">教务总监</div>
                                <div className="box">
                                    <div className="text">电子科技大学教授</div>
                                    <div className="text">美国田纳西大学CURENT实验室博士后</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、AI人工智能、C++程序设计、Python程序设计、GO语言程序设计</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>长期从事能源和军工领域内复杂软件系统和实时服务器软件设计，具备实时系统和并行系统设计的丰富经验，其中，设计并成功研制了XX型号无人飞行器飞控综合测试软件系统；在电子科技大学长期开设《C++标准模板库程序设计》和《软件设计模式》两门热选课，在电子科技大学首开32学时的《区块链技术及其应用》课程。曾以“能源互联网区块链项目”，荣获工信部指导，国家电子标准研究院主办的《首届全国区块链开发大赛》全国二等奖；目前参与科技部重大专项《面向新型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。为国际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>李维江<span>Joey</span></div>
                                <div className="position">区块链课程特聘讲师</div>
                                <div className="box">
                                    <div className="text">美国斯蒂文斯理工学院网络信息工程硕士</div>
                                    {/*<div className="text">电子科技大学博士生导师</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、互联网金融、以太坊技术开发</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>曾就职于美国华尔街大都会通信有限公司，从事金融、数据软件产品开发和运营。在校期间，长期从事认知无线电网络和计算机算法的设计，并在通信与信息系统国际会议上成功发表论文《多小区认知无线网络中基于免疫算法的资源分配》。2016年，在美国接触到区块链，长期参与公司实验室区块链应用的研究和实践，熟悉比特币和以太坊的源代码设计及技术开发，熟练运用C#, .NET MVC，SQL Server并 参与产品设计，拥有多年数据库开发经验， 熟悉SSIS,SSRS后端数据开发流程。2017年，在美国共同创立毕曼瑞（Bitmory）网络技术有限公司，公司致力于开发区块链矿机方面的实际应用和优化提升矿机的整体效能。</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>姚兰<span>Lan Yao</span></div>
                                <div className="position">AI人工智能课程教研总监</div>
                                <div className="box">
                                    <div className="text">西南交通大学博士</div>
                                    <div className="text">成都信息工程大学副教授</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链，AI人工智能、C++程序设计</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>美国西北理工大学访问学者，成都软件外包业务首批赴美培训专家，长期在成都信息工程大学开设《面向对象程序设计》，《C++程序设计》等课程。研究领域：区块链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>田涌町<span>YongDing Tian</span></div>
                                <div className="position">AI人工智能课程讲师</div>
                                <div className="box">
                                    <div className="text">电子科技大学& 格拉斯哥大学双校培养电子信息工程学士，一等荣誉学位。</div>
                                    {/*<div className="text">电子科技大学博士生导师</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>擅长C# (.Net Framework)、C# (.Net core, including UWP)、C++、Python、Matlab，基于Linux的嵌入式平台: Raspberry Pi, Nvidia Jetson TX2等语言。曾获瓦特创新人才奖学金、2016  中国大学生智能设计竞赛（华为杯）全国总决赛第4名，一等人民奖学金 (电子科技大学前1%)等奖项 。参与过ICRA Robomaster 2018大赛、基于摄像头以及纹理识别的智能小车设计、人类意图识别的自主飞行器、基于UWB定位的无人机编队飞行等多个项目，表现突出，是电子科技大学重点培养的天才少年。</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"><i></i>何涛<span>Tao He</span></div>
                                <div className="position">大数据课程讲师</div>
                                <div className="box">
                                    <div className="text">电子科技大学机电学院硕士</div>
                                    {/*<div className="text">电子科技大学博士生导师</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt" style={{marginTop:'10px'}}><span>简介：</span>拥有丰富的Java开发经验，能熟练运用JDK源码、并发与IO，Hadoop、Hive、Zookeeper、Kafka等常见大数据组件，Spring、Netty、SpringCloud、SpringBoot、Redis等主流java后台开发技术。热衷区块链技术，熟悉fabric开发，了解bitcoin、bitshares、eos、以太坊开发技术。讲课风格生动有趣，是难得的既做得好又讲得好的技术人才。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Teacher