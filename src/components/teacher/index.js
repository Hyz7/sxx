import React, {Component} from 'react'
import sxxImg from '../../images/sxxbanner.png'
import FloatWin from '../../common/floatWindow'
import { Modal } from 'antd'
class Teacher extends Component {
    state = {
        teacherType: 'qkl',
        navPosition: false,
        typeName:'all',
        teacherName:'',
        visible:false
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0
        document.addEventListener('scroll', this.winScroll.bind(this), false);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.winScroll.bind(this), false);
    }

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

    winScroll = () => {
        let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scollTop < 550) {
            if (this.state.navPosition) {
                this.setState({
                    navPosition: !this.state.navPosition
                })
            }
        } else {
            if (!this.state.navPosition) {
                this.setState({
                    navPosition: !this.state.navPosition
                })
            }
        }
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) {
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }
    handleChangeType = (value) => {
        this.setState({
            teacherType: value
        })
        document.documentElement.scrollTop = 400
    }

    changeTeacher=(name)=>{
        this.setState({
            teacherName:name,
            visible:true
        })
    }
    render() {
        let {typeName,teacherName} = this.state
        return (
            <div className='teacher-container'>
                <FloatWin />
                <div className="teacher-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <Modal title={this.state.teacherName} visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                <div className="teacher-position">
                    <div className="teacher-title">专家大牛</div>
                    <div className="lnav">
                        <div className="scrollNav"  style={{position: this.state.navPosition ? 'fixed' : 'relative'}}>
                            <p className="">讲师分类</p>
                            <div >
                                <span className='shuxian'></span>
                                <ul className="lnavs" onClick={(e)=>{this.setState({typeName:e.target.parentNode.className})}}>
                                    <li className="all">
                                        <a className={typeName=='all'?'lnav_active':''}><span className="circle"></span>全部讲师</a>
                                    </li>
                                    <li className="qkl">
                                        <a className={typeName=='qkl'?'lnav_active':''}><span className="circle"></span>区块链工程师</a>
                                    </li>
                                    <li className="c++">
                                        <a className={typeName=='c++'?'lnav_active':''}><span className="circle"></span>C/C++</a>
                                    </li>
                                    <li className="es6">
                                        <a className={typeName=='es6'?'lnav_active':''}><span className="circle"></span>Javascript ES6</a>
                                    </li>
                                    <li className="go">
                                        <a className={typeName=='go'?'lnav_active':''}><span className="circle"></span>Go语言</a>
                                    </li>
                                    <li className="python">
                                        <a className={typeName=='python'?'lnav_active':''}><span className="circle"></span>Python</a>
                                    </li>
                                    <li className="data">
                                        <a className={typeName=='data'?'lnav_active':''}><span className="circle"></span>大数据</a>
                                    </li>
                                    <li className="swift">
                                        <a className={typeName=='swift'?'lnav_active':''}><span className="circle"></span>Swift程序设计</a>
                                    </li>
                                    <li className="yunjisuan">
                                        <a className={typeName=='yunjisuan'?'lnav_active':''}><span className="circle"></span>云计算</a>
                                    </li>
                                    <li className="safety">
                                        <a className={typeName=='safety'?'lnav_active':''}><span className="circle"></span>新一代网络安全</a>
                                    </li>
                                    <li className="ai">
                                        <a className={typeName=='ai'?'lnav_active':''}><span className="circle"></span>AI人工智能</a>
                                    </li>
                                    <li className="quanzhan">
                                        <a className={typeName=='quanzhan'?'lnav_active':''}><span className="circle"></span>全栈软件测试</a>
                                    </li>
                                    <li className="wulianwang">
                                        <a className={typeName=='wulianwang'?'lnav_active':''}><span className="circle"></span>智能物联网</a>
                                    </li>
                                    <div className="lnav_xian hidden-xs circle"></div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="teacher-list row">
                        <div className="list" id='zhang'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/zhang.png'/>
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">张小松</div><div className="teacher-posi">专家顾问</div>
                                </div>
                                <div className="box">
                                    <div className="text">长江学者特聘教授</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>网络安全、大数据应用、区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，
                                    电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室
                                    技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科
                                    技委国防学部委员，四川省学术技术带头人。长期致力于网络信息技术安全领域的基
                                    础研究和技术攻关，成果在应用中取得重要的社会和经济效益。
                                </div>
                            </div>
                            {/*<div className="right-box">
                                <div className="name"><i></i>张小松<span>XiaoSong Zhang</span></div>
                                <div className="position">教务资深顾问</div>
                                <div className="box">
                                    <div className="text">长江学者特聘教授</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>网络安全、大数据应用、区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，
                                    电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室
                                    技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科
                                    技委国防学部委员，四川省学术技术带头人。长期致力于网络信息技术安全领域的基
                                    础研究和技术攻关，成果在应用中取得重要的社会和经济效益。
                                </div>
                            </div>*/}
                        </div>
                        <div className="list" id='guobing'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/guobing.png'/>
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">郭兵</div><div className="teacher-posi">专家顾问</div>
                                </div>
                                <div className="box">
                                    <div className="text">四川大学计算机学院（软件学院）副院长,博士生导师</div>
                                    {/*<div className="text">电子科技大学博士生导师</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、嵌入式系统与大数据管理</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    博士，教授，博士生导师，四川大学计算机学院（软件学院）副院长，CCF/IEEE高
                                    级会员，CCF嵌入式系统专委会副主任，四川省物联网工程技术研究中心副主任，四川大学
                                    “嵌入式系统与大数据管理实验室”负责人，曾在美国密执根
                                    州立大学、日本筑波大学和韩国Kyungwon大学做访问教授。发表学术论文160余篇，
                                    其中SCI检索34篇，EI检索72篇，撰写教材4本和专著2本，18项国家发明专利，主持
                                    《软件开发实践》省级精品课程和“十二五”
                                    规划教材建设工作，多种杂志和IEEE/ACM 等多个国际会议审稿人，以General
                                    Co-chair主办七次国际会议，核高基、国家863计划、NSFC、教育部长江学者、四
                                    川省科技厅等项目评审专家和国家科学技术奖励评审专家。
                                </div>
                            </div>
                            {/*<div className="right-box">
                                <div className="name"><i></i>郭兵<span>Bing Guo</span></div>
                                <div className="position">区块链课程特聘教授</div>
                                <div className="box">
                                    <div className="text">四川大学计算机学院（软件学院）副院长,博士生导师</div>
                                    <div className="text"></div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、嵌入式系统与大数据管理</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    博士，教授，博士生导师，四川大学计算机学院（软件学院）副院长，CCF/IEEE高
                                    级会员，CCF嵌入式系统专委会副主任，四川省物联网工程技术研究中心副主任，四川大学
                                    “嵌入式系统与大数据管理实验室”负责人，曾在美国密执根
                                    州立大学、日本筑波大学和韩国Kyungwon大学做访问教授。发表学术论文160余篇，
                                    其中SCI检索34篇，EI检索72篇，撰写教材4本和专著2本，18项国家发明专利，主持
                                    《软件开发实践》省级精品课程和“十二五”
                                    规划教材建设工作，多种杂志和IEEE/ACM 等多个国际会议审稿人，以General
                                    Co-chair主办七次国际会议，核高基、国家863计划、NSFC、教育部长江学者、四
                                    川省科技厅等项目评审专家和国家科学技术奖励评审专家。
                                </div>
                            </div>*/}
                        </div>
                        <div className="list" id='gujianjun'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/gujianjun.png'/>
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">顾见军</div><div className="teacher-posi">实战导师</div>
                                </div>
                                <div className="box">
                                    <div className="text">区块链课程特聘专家</div>
                                    {/*<div className="text">电子科技大学博士生导师</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链金融</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    数融科技CEO，川大硕士，量化智能风控专家，金融标准制定者，国家大数据标
                                    委会专家组成员，参加制定四川银监局的本地法人银行等级监管达标标准，熟悉
                                    巴塞尔协议、银行风控业务。2016年提出了量化智能风控的思路，并且带领团队
                                    开发了智能风控引擎、量化智能风控系统等产品。
                                </div>
                            </div>
                            {/*<div className="right-box">
                                <div className="name"><i></i>顾见军<span>JianJun Gu</span></div>
                                <div className="position">区块链课程特聘专家</div>
                                <div className="box">
                                    <div className="text">数融科技CEO</div>
                                    <div className="text">川大硕士</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链金融</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    数融科技CEO，川大硕士，量化智能风控专家，金融标准制定者，国家大数据标
                                    委会专家组成员，参加制定四川银监局的本地法人银行等级监管达标标准，熟悉
                                    巴塞尔协议、银行风控业务。2016年提出了量化智能风控的思路，并且带领团队
                                    开发了智能风控引擎、量化智能风控系统等产品。
                                </div>
                            </div>*/}
                        </div>
                        <div className="list" id='chenshijia'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/chensijia.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>陈诗佳<span>ShiJia Chen</span></div>
                                <div className="position">区块链课程特聘专家</div>
                                <div className="box">
                                    <div className="text">网信天成创始人</div>
                                    <div className="text">成都市大数据协会区块链专委会特聘专家</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    法链实验室技术顾问 电子科大网络安全实验室产业化研究院高级研究员 毕业于
                                    四川大学 曾主持涉清华大学、阿里巴巴、中国电子集团及中航工业等世界知名机
                                    构的信息化合作，同时也是数个知名公链的技术提供方，对区块链领域有系统性
                                    的认知和实践经验。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">陈诗佳</div><div className="teacher-posi">实战导师</div>
                                </div>
                                <div className="box">
                                    <div className="text">网信天成创始人</div>
                                    <div className="text">成都市大数据协会区块链专委会特聘专家</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    法链实验室技术顾问 电子科大网络安全实验室产业化研究院高级研究员 毕业于
                                    四川大学 曾主持涉清华大学、阿里巴巴、中国电子集团及中航工业等世界知名机
                                    构的信息化合作，同时也是数个知名公链的技术提供方，对区块链领域有系统性
                                    的认知和实践经验。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='liuyufeng'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/liuyufeng.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>刘宇峰<span>YuFeng Liu</span></div>
                                <div className="position">区块链课程特聘专家</div>
                                <div className="box">
                                    <div className="text">网信天成创始人</div>
                                    <div className="text">工信部区块链标准组专家成员</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    工信部区块链标准组专家成员; 大数据标准组联合组长;10年以上的公司战略规
                                    划、客户管理、团队管理经验；自由数据品牌创始人。历任Motorola
                                    kia技术和客户管理岗位，华宇软件首席大数据业务专家。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">刘宇峰</div><div className="teacher-posi">实战导师</div>
                                </div>
                                <div className="box">
                                    <div className="text">网信天成创始人</div>
                                    <div className="text">工信部区块链标准组专家成员</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    工信部区块链标准组专家成员; 大数据标准组联合组长;10年以上的公司战略规
                                    划、客户管理、团队管理经验；自由数据品牌创始人。历任Motorola
                                    kia技术和客户管理岗位，华宇软件首席大数据业务专家。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='zhangshibing'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/zhangshibin.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>张仕斌<span>ShiBing Zhang</span></div>
                                <div className="position">区块链课程特聘专家</div>
                                <div className="box">
                                    <div className="text">四川省司法厅网络安全鉴定专家</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链,网络安全</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    工学博士（博士后），四川省有突出贡献的优秀专家，中国计算机学会区块链
                                    专委会委员，中国密码学会高级会员，四川省计算 机学会网络与信息系统专委
                                    会暨西南网络与信息系统协会副主任，四川省司法 厅网络安全鉴定专家，现任成
                                    都信息工程大学网络空间安全学院副院长。主要从事网络安全、区块链、 量子安全
                                    通信等领域的教学与科研工作；先后主持或主研国家自然科学基金、 科技部网络安
                                    全重大专项，获专利及软件著作权授权50余项；
                                    发表学术论文100余篇（其中SCI检索18篇）；编著出版教材8本,省级精品在线开放
                                    课程先 后获得省部级科技进步一、二、三等奖4项，教学成果奖1等奖3项、二等
                                    奖4项。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">张仕斌</div><div className="teacher-posi">实战导师</div>
                                </div>
                                <div className="box">
                                    <div className="text">四川省司法厅网络安全鉴定专家</div>
                                    {/*<div className="text">工信部区块链标准组专家成员</div>*/}
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    工学博士（博士后），四川省有突出贡献的优秀专家，中国计算机学会区块链
                                    专委会委员，中国密码学会高级会员，四川省计算 机学会网络与信息系统专委
                                    会暨西南网络与信息系统协会副主任，四川省司法 厅网络安全鉴定专家，现任成
                                    都信息工程大学网络空间安全学院副院长。主要从事网络安全、区块链、 量子安全
                                    通信等领域的教学与科研工作；先后主持或主研国家自然科学基金、 科技部网络安
                                    全重大专项，获专利及软件著作权授权50余项；
                                    发表学术论文100余篇（其中SCI检索18篇）；编著出版教材8本,省级精品在线开放
                                    课程先 后获得省部级科技进步一、二、三等奖4项，教学成果奖1等奖3项、二等
                                    奖4项。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='shuai'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/he.png'/>
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">帅青红</div><div className="teacher-posi">专家顾问</div>
                                </div>
                                <div className="box">
                                    <div className="text">博士、教授</div>
                                    <div className="text">西南财经大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>电子商务，科技金融，区块链应用</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    中国电子商务协会电子金融产业联盟专家，中国互联网金融协会专家。四川省
                                    市场监管研究院特聘研究员、四川省科技产业联盟专家，四川省电子商务协会
                                    专家组副组长、四川省软件行业协会副理事长兼电子商务与电子政务专委会主任
                                    ，成都市政府特聘电子商务专家。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='yao'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/yao.png' />
                            {/*<div className="right-box">
                                <div className="name"><i></i>姚兰<span>Lan Yao</span></div>
                                <div className="position">AI人工智能课程教研总监</div>
                                <div className="box">
                                    <div className="text">西南交通大学博士</div>
                                    <div className="text">成都信息工程大学副教授</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链，AI人工智能、C++程序设计</div>
                                <div className="goodAt1" style={{marginTop:'10px'}}><span>简介：</span>
                                    美国西北理工大学访问学者，成都软件外包业务首批赴美培训专家，长期在成
                                    都信息工程大学开设《面向对象程序设计》，《C++程序设计》等课程。研究
                                    领域：区块链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">姚兰</div><div className="teacher-posi">课程讲师</div>
                                </div>
                                <div className="box">
                                    <div className="text">西南交通大学博士</div>
                                    <div className="text">成都信息工程大学副教授</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链，AI人工智能、C++程序设计</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    美国西北理工大学访问学者，成都软件外包业务首批赴美培训专家，长期在成
                                    都信息工程大学开设《面向对象程序设计》，《C++程序设计》等课程。研究
                                    领域：区块链+人工智能，在区块链+人工智能领域发表论文10多篇检索论文。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='gui'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/gui.png'/>
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">桂勋</div><div className="teacher-posi">课程讲师</div>
                                </div>
                                <div className="box">
                                    <div className="text">电子科技大学教授</div>
                                    <div className="text">美国田纳西大学CURENT实验室博士后</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、AI人工智能、C++程序设计、Python程序设计、GO语言程序设计</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    长期从事能源和军工领域内复杂软件系统和实时服务器软件设计，具备实时系统
                                    和并行系统设计的丰富经验;在电子科技大学首开32学时的《区块链技术及其应用》课
                                    程。曾以“能源互联网区块链项目”，荣获工信部指导，国家电子标准研究院主
                                    办的《首届全国区块链开发大赛》全国二等奖；目前参与科技部重大专项《面向新
                                    型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。为国
                                    际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                </div>
                            </div>
                            {/*<div className="right-box">
                                <div className="name"><i></i>桂勋<span>Xun Gui</span></div>
                                <div className="position">教务总监</div>
                                <div className="box">
                                    <div className="text">电子科技大学教授</div>
                                    <div className="text">美国田纳西大学CURENT实验室博士后</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、AI人工智能、C++程序设计、Python程序设计、GO语言程序设计</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    长期从事能源和军工领域内复杂软件系统和实时服务器软件设计，具备实时系统
                                    和并行系统设计的丰富经验;在电子科技大学首开32学时的《区块链技术及其应用》课
                                    程。曾以“能源互联网区块链项目”，荣获工信部指导，国家电子标准研究院主
                                    办的《首届全国区块链开发大赛》全国二等奖；目前参与科技部重大专项《面向新
                                    型城镇的能源互联网关键技术及应用》，负责高性能能源区块链的研制工作。为国
                                    际电气工程师协会IEEE 2418.2 区块链数据格式标准制定委员会成员。
                                </div>
                            </div>*/}
                        </div>
                        <div className="list" id='li'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/li.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>李维江<span>Joey</span></div>
                                <div className="position">区块链课程特聘讲师</div>
                                <div className="box">
                                    <div className="text">美国斯蒂文斯理工学院网络信息工程硕士</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、互联网金融、以太坊技术开发</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    曾就职于美国华尔街大都会通信有限公司，从事金融、数据软件产品开发和运营
                                    。在通信与信息系统国际会议上成功发表论文《多小区认知无线网络中基于免疫
                                    算法的资源分配。》 2016年，在美国长期参与公司实验室区块链应用的研究和实践，
                                    熟悉比特币和以太坊的技术开发，熟练运用C#, .NET MVC，SQL
                                    Server并参与产品设计，拥有多年数据库开发经验。2017年，在美国共同创
                                    立（Bitmory）网络技术有限公司，公司 致力于开发区块链矿机方面的实际应用
                                    和优化提升矿机的整体效能。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">李维江</div><div className="teacher-posi">课程讲师</div>
                                </div>
                                <div className="box">
                                    <div className="text">美国斯蒂文斯理工学院网络信息工程硕士</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>区块链、互联网金融、以太坊技术开发</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    曾就职于美国华尔街大都会通信有限公司，从事金融、数据软件产品开发和运营
                                    。在通信与信息系统国际会议上成功发表论文《多小区认知无线网络中基于免疫
                                    算法的资源分配。》 2016年，在美国长期参与公司实验室区块链应用的研究和实践，
                                    熟悉比特币和以太坊的技术开发，熟练运用C#, .NET MVC，SQL
                                    Server并参与产品设计，拥有多年数据库开发经验。2017年，在美国共同创
                                    立（Bitmory）网络技术有限公司，公司 致力于开发区块链矿机方面的实际应用
                                    和优化提升矿机的整体效能。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='tian'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/tian.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>田涌町<span>YongTing Tian</span></div>
                                <div className="position">AI人工智能课程讲师</div>
                                <div className="box">
                                    <div className="text">电子科技大学& 格拉斯哥大学双校培养电子信息工程学士，一等荣誉学位。</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt1" style={{marginTop:'10px'}}><span>简介：</span>
                                    擅长C# (.Net Framework)、C# (.Net core, including UWP)、C++、Python、
                                    Matlab，基于Linux的嵌入式平台: Raspberry Pi, Nvidia Jetson TX2等语言。
                                    曾获瓦特创新人才奖学金、2016  中国大学生智能设计竞赛（华为杯）全国总决
                                    赛第4名，一等人民奖学金 (电子科技大学前1%)等奖项 。参与过ICRA Robomaster
                                    2018大赛、基于摄像头以及纹理识别的智能小车设计、人类意图识别的自主飞行器、
                                    基于UWB定位的无人机编队飞行等多个项目，表现突出，是电子科技大学重点培养的
                                    天才少年。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">田涌町</div><div className="teacher-posi">课程讲师</div>
                                </div>
                                <div className="box">
                                    <div className="text">电子科技大学& 格拉斯哥大学双校培养电子信息工程学士，一等荣誉学位。</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    擅长C# (.Net Framework)、C# (.Net core, including UWP)、C++、Python、
                                    Matlab，基于Linux的嵌入式平台: Raspberry Pi, Nvidia Jetson TX2等语言。
                                    曾获瓦特创新人才奖学金、2016  中国大学生智能设计竞赛（华为杯）全国总决
                                    赛第4名，一等人民奖学金 (电子科技大学前1%)等奖项 。参与过ICRA Robomaster
                                    2018大赛、基于摄像头以及纹理识别的智能小车设计、人类意图识别的自主飞行器、
                                    基于UWB定位的无人机编队飞行等多个项目，表现突出，是电子科技大学重点培养的
                                    天才少年。
                                </div>
                            </div>
                        </div>
                        <div className="list" id='he'>
                            <img className="avatar" src='http://52.83.225.97:8080/imgs/teacher/he.png'/>
                            {/*<div className="right-box">
                                <div className="name"><i></i>何涛<span>Tao He</span></div>
                                <div className="position">大数据课程讲师</div>
                                <div className="box">
                                    <div className="text">电子科技大学机电学院硕士</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt1" style={{marginTop:'10px'}}><span>简介：</span>
                                    拥有丰富的Java开发经验，能熟练运用JDK源码、并发与IO，Hadoop、Hive、
                                    Zookeeper、Kafka等常见大数据组件，Spring、Netty、SpringCloud、SpringBoot、
                                    Redis等主流java后台开发技术。热衷区块链技术，熟悉fabric开发，了解bitcoin、
                                    bitshares、eos、以太坊开发技术。讲课风格生动有趣，是难得的既做得好又讲得好
                                    的技术人才。
                                </div>
                            </div>*/}
                            <div className="list-right-box">
                                <div className="title-box">
                                    <span>专家</span><div className="teacher-name">何涛</div><div className="teacher-posi">课程讲师</div>
                                </div>
                                <div className="box">
                                    <div className="text">电子科技大学机电学院硕士</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt"><span>擅长领域：</span>AI人工智能、C++程序设计、Python程序设计</div>
                                <div className="goodAt1" style={{marginTop: '10px'}}><span>简介：</span>
                                    拥有丰富的Java开发经验，能熟练运用JDK源码、并发与IO，Hadoop、Hive、
                                    Zookeeper、Kafka等常见大数据组件，Spring、Netty、SpringCloud、SpringBoot、
                                    Redis等主流java后台开发技术。热衷区块链技术，熟悉fabric开发，了解bitcoin、
                                    bitshares、eos、以太坊开发技术。讲课风格生动有趣，是难得的既做得好又讲得好
                                    的技术人才。
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Teacher