import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import coures from '../../images/core/coures.png'
import project from '../../images/core/project.png'
import model from '../../images/core/model.png'
import FloatWin from '../../common/floatWindow'
import sxxImg from "../../images/sxxbanner.png";
class Core extends Component{
    componentDidMount() {
        document.documentElement.scrollTop=0
    }

    render() {
        return(
            <div className='core-container'>
                <FloatWin />
                <div className="about-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="core-position">
                    <div className="core-content">
                        <div className='core-item1'>
                            {/*<img src={Core1} alt=""/>*/}
                            <div className="text">
                                思学行由电子科技大学网络空间安全中心发起，由“成都市大数据协会区块链专委会”的指导。在高校和行业的双指导保障下，
                                创立紧贴全国新一代信息技术行业需求、发展及就业趋势的教学体系，设置特色化的教学内容和教学方式，打造从线上到线下的一体化教学。
                            </div>
                           {/* <div className="content">
                                高校、专家赋能，紧贴时代，一步一个脚印，踏实研发迭代最快，最符合实战应用的新一代信息技术课程。8大模块，超2000课时教程，求学、加薪、晋升、创业满足你的多种需求。
                            </div>*/}
                            <div className="core-btn">
                                {/*<a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes" style={{color:'#fff'}}>查看全部大纲</a>*/}
                                <a style={{color:'#fff'}} target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                    查看全部大纲
                                </a>
                            </div>
                        </div>
                        <div className="core-middle">
                            <div className="list">
                                <img src={model} alt=""/>
                                <div className="title">首创培训模式</div>
                                <div className="text">全国首创区块链开源项目源码工程和软件设计模式相结合的培训模式。</div>
                            </div>
                            <div className="list">
                                <img src={project} alt=""/>
                                <div className="title">项目资源多</div>
                                <div className="text"> 与超过百家顶尖企业保持合作联系。</div>
                            </div>
                            <div className="list">
                                <img src={coures} alt=""/>
                                <div className="title">高质量课程</div>
                                <div className="text">由电子科技大学等高校教授亲自主导课程设计，萃取融合多家顶级公司项目经验，打造真正对接就业的实战课程。</div>
                            </div>
                        </div>
                        <div className='core-item2'>
                            {/*<img src={Core2} alt=""/>*/}
                            <div className="box1">
                                <div className="list">双平台教学，超低风险，不用辞职</div>
                                <div className="list">985、211高校资深教授严控课程研发，保证授课内容的权威有效</div>
                                <div className="list">超10年教务经验教务主任主导教务管理，课堂监管、线下辅导、作业批改，全方位保障学习效果达成</div>
                            </div>
                            <div className="box2">
                                <div className="list">立足成都，辐射西南，不到“北上广深”也可享受高质量教育服务</div>
                                <div className="list">受“成都市大数据协会区块链专委会”指导，掌握最新政策信息。</div>
                                <div className="list">超30家顶尖企业战略合作，保障就业的稳定可靠</div>
                                <div className="list">多家金融机构合作，用更少的钱获得更多的知识</div>
                            </div>
                            <div className="core-btn">
                                {/*<a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes" style={{color:'#fff'}}>了解更多</a>*/}
                                <a style={{color:'#fff'}} target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                    了解更多
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Core)