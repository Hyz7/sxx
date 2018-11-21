import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import Core1 from '../../images/core/core1.png'
import Core2 from '../../images/core/core2.png'
class Core extends Component{

    render() {
        return(
            <div className='core-container'>
                <div className="core-position">
                    <div className="core-content">
                        <div className='core-item1'>
                            <img src={Core1} alt=""/>
                            <div className="text">
                                全新的培训模式，强大的师资团队，
                                丰富的研发经验，系统的课程体系.
                            </div>
                            <div className="content">
                                高校、专家赋能，紧贴时代，一步一个脚印，踏实研发迭代最快，最符合实战应用的新一代信息技术课程。8大模块，超2000课时教程，求学、加薪、晋升、创业满足你的多种需求。
                            </div>

                        </div>
                        <div className="core-btn">查看全部大纲</div>
                        <div className='core-item2'>
                            <img src={Core2} alt=""/>
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
                            <div className="core-btn">了解更多</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Core)