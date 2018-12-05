import React, {Component} from 'react';
import img from '../../../images/home/banner1.png'
import baomingImg from "../../../images/home/baoming.png";
class QKL extends Component {
    render() {
        return (
            <div className='qkl-container'>
                <div className="banner">
                    <img src={img} alt=""/>
                    <div className="qkl-tab">
                        <ul className="qkl-tab-position">
                            <li><span className='span1'></span>区块链工程师</li>
                            <li><span className='span2'></span>大数据</li>
                            <li><span className='span3'></span>AI人工智能</li>
                            <li><span className='span4'></span>新一代网络安全</li>
                            <li><span className='span5'></span>云计算</li>
                            <li><span className='span6'></span>智能物联网</li>
                            <li><span className='span7'></span>全栈软件测试</li>
                        </ul>
                    </div>
                </div>
                <div className="qkl-position">
                    <div className="box">
                        <div className="title">
                            <span></span>为什么要选择思学行？
                        </div>
                        <p>结合区块链技术的最新发展趋势和动态，在全国首创结合区块链开源架构解析和软件设计模式的培训模式，</p>
                        <p>让学员全面理解并掌握区块链核心开发语言：C++14、GO、JavaScript ES6/Node.js；</p>
                        <p>掌握区块链各个关键技术点：P2P网络、共识算法、密码学，智能合约；最后学员通过参与多个精心设计的项目实战全面掌握区块链开发技术。</p>
                    </div>
                    <div className="box box1">
                        <div className="title">
                            <span></span>学习方式：
                        </div>
                        <div className="content">线下授课</div>
                    </div>
                    <div className="box box1">
                        <div className="title">
                            <span></span>培训对象：
                        </div>
                        <div className="content">在职软件开发工程师、区块链技术爱好者，学习者需具备一定的计算机语言基础</div>
                    </div>
                    <div className="box box1">
                        <div className="title">
                            <span></span>报名方式：
                        </div>
                        <div className="content">线上、线下报名均可，详情询客服</div>
                    </div>
                    <div className="box box1">
                        <div className="title">
                            <span></span>课程费用：
                        </div>
                        <div className="content">限时优享价2.1万，更多优惠询客服</div>
                    </div>
                    <div className="box box1">
                        <div className="title">
                            <span></span>课程时长：
                        </div>
                        <div className="content">本课程为周六周日的上课，持续时间三个半月</div>
                    </div>
                    <div className="box">
                        <div className="title">
                            <span></span>模块设计：
                        </div>
                        <div className="content">模块设计：课程设计上采用：区块链基础入门 → 区块链架构解析与核心程序语言实操 → 区块链关键技术学习与操练 → 区块链架构设计能力提升 → 区块链项目实战，共五个阶段的课程设置，前一个阶段是后一个阶段的提升基础，五个阶段是一个循序渐进的过程，可让学员能逐步、全面、深入地学习并掌握区块链技术。</div>
                    </div>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>模块名称</th>
                            <th>章节介绍</th>
                            <th>培训目的</th>
                            <th>学时</th>
                            <th>价格</th>
                        </tr>
                        {/*第一行*/}
                        <tr >
                            <td rowSpan={3} style={{color:'#666',fontSize:'24px',textAlign:'center'}}>区块链基础入门</td>
                            <td>第一章：从哈耶克到比特币</td>
                            <td rowSpan={3}>
                                让学生完整了解区块链的经济学起源和技术发展脉络；
                                理解区块链的运行原理；了解区块链各个应用领域内的解决方案；
                                最终掌握区块链技术的内涵和外延。
                            </td>
                            <td>2学时</td>
                            <td rowSpan={3}>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span>
                            </td>
                        </tr>
                        <tr>
                            <td>第二章：区块链运行原理</td>
                            <td>4学时</td>
                        </tr>
                        <tr>
                            <td>第三章：区块链应用场景：金融业、物联网、电子政务、医疗等</td>
                            <td>2学时</td>
                        </tr>
                        {/*第2行*/}
                        <tr>
                            <td rowSpan={3} style={{color:'#666',fontSize:'24px',textAlign:'center'}}>区块链架构解析 与核心程序语言实操</td>
                            <td>第一章：石墨烯区块链架构解析与 C++ 14语言</td>
                            <td rowSpan={3}>
                                培训目标：结合区块链开源代码系统学习 C++ 14，GO ，
                                JavaScript ES6/ Node.js，而后通过编程题目，掌握每一门区
                                块链设计语言的核心要素与重要语法。
                            </td>
                            <td>32学时</td>
                            <td rowSpan={3}><span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span></td>
                        </tr>
                        <tr>
                            <td>第二章：Hyperlegder、以太坊架
                                构解析与GO语言</td>
                            <td>32学时</td>
                        </tr>
                        <tr>
                            <td>第三章：区块链前后端技术与JavaScript ES6/Node.JS语言</td>
                            <td>16学时</td>
                        </tr>
                        {/*第3行*/}
                        <tr>
                            <td rowSpan={6} style={{color:'#666',fontSize:'24px',textAlign:'center'}}>区块链关键技术 学习与操练</td>
                            <td>第一章：共识算法</td>
                            <td rowSpan={6}>
                                针对区块链各个关键技术进行系统讲解，通过关键技术
                                编程和环境搭建实践，掌握区块链在：P2P、密码学、
                                共识算法、智能合约、Docker和开发环境搭建上的关键开发技术。
                            </td>
                            <td>16学时</td>
                            <td rowSpan={6}><span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span></td>
                        </tr>
                        <tr>
                            <td>第二章：P2P网络</td>
                            <td>16学时</td>
                        </tr>
                        <tr>
                            <td>第三章：密码学</td>
                            <td>16学时</td>
                        </tr>
                        <tr>
                            <td>第四章：Docker</td>
                            <td>16学时</td>
                        </tr>
                        <tr>
                            <td>第五章：环境搭建</td>
                            <td>8学时</td>
                        </tr>
                        <tr>
                            <td>第六章：智能合约</td>
                            <td>8学时</td>
                        </tr>

                        {/*第一行*/}
                        <tr>
                            <td rowSpan={6} style={{color:'#666',fontSize:'24px',textAlign:'center'}}>区块链架构设计能力提升</td>
                            <td>第一章：设计模式方法学</td>
                            <td rowSpan={6}>
                                讲解和区块链开源工程相关的软件设计模式、
                                并完成设计题目、掌握软件设计模式方法学，
                                全方位提升学员的软件设计水平和架构设计能力。
                            </td>
                            <td>1学时</td>
                            <td rowSpan={6}><span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span></td>
                        </tr>
                        <tr>
                            <td>第二章：设计模式的原则</td>
                            <td>2学时</td>
                        </tr>
                        <tr>
                            <td>第三章：用C语言解释多态本质精解</td>
                            <td>1学时</td>
                        </tr>
                        <tr>
                            <td>第四章：结合区块链源码工程讲解：
                                创建型设计模式（C++和GO语言表述）（Factory Method，Abstract Factory，Builder，Prototype，Singleton）</td>
                            <td>4学时</td>
                        </tr>
                        <tr>
                            <td>第五章：结合区块链源码工程讲解：创建型设计模式（C++和GO语言表述）（Adapter，Bridge，Composite，Decorator，Façade，Flyweight，Proxy）</td>
                            <td>4学时</td>
                        </tr>
                        <tr>
                            <td>第六章：结合区块链源码工程讲解：行为型设计模式（C++和GO语言表述）（Command, Iterator, Mediator, Memonto, Observer, State, Strategy, Visitor, Chain Of Responsibility）</td>
                            <td>4学时</td>
                        </tr>
                        {/*第5行*/}
                        <tr>
                            <td rowSpan={5} style={{color:'#666',fontSize:'24px',textAlign:'center'}}>区块链项目实战</td>
                            <td>第一章：基于EOS能源区块链项目实战</td>
                            <td rowSpan={5}>
                                通过精心设计好的项目，让学员针对项目进行实际设计
                                和实操，并最终形成应用系统。学员最终完全掌握区块
                                链的开发技术。
                            </td>
                            <td>8学时</td>
                            <td rowSpan={5}><span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span></td>
                        </tr>
                        <tr>
                            <td>第二章：钱包项目实战</td>
                            <td>8学时</td>
                        </tr>
                        <tr>
                            <td>第三章：基于以太坊的电商项目实战</td>
                            <td>8学时</td>
                        </tr>
                        <tr>
                            <td>第四章：基于Hyperledger Fabric
                                的供应链金融系统实战</td>
                            <td>8学时</td>
                        </tr>
                        <tr>
                            <td>第五章：闪电网络实战</td>
                            <td>8学时</td>
                        </tr>
                        <tr>
                            <td style={{color:'#666',fontSize:'24px',textAlign:'center'}}>培训总结与考核</td>
                            <td>每一位学员上台进行项目总结发言，
                                反馈培训情况；并颁发结业证书。</td>
                            <td>总结和反馈</td>
                            <td>8学时</td>
                            <td><span><svg className='icon-svg'><use xlinkHref='#icon-qq1'></use></svg>点击咨询</span>
                                <span><svg className='icon-svg'><use xlinkHref='#icon-weixin1'></use></svg>点击咨询</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="baoming" id='baoming'>
                        <div className="baoming-position">
                            <div className="title">报名流程</div>
                            <div className="baoming-box" style={{marginTop:'40px'}}>
                                <img src={baomingImg} alt="区块链"/>
                            </div>
                            <h1 className="baoming-btn">
                                我要报名
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QKL;