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
                        <li>全部讲师</li>
                        <li>区块链</li>
                        <li>AI人工智能</li>
                        <li>大数据</li>
                        <li>新一代网络安全</li>
                        <li>云计算</li>
                        <li>智能物联网</li>
                        <li>全栈软件测试</li>
                    </ul>
                    <div className="teacher-list">
                        <div className="teacher-title">专家大牛全程面授</div>
                        <div className="list">
                            <div className="avatar"></div>
                            <div className="right-box">
                                <div className="name"> <i></i>张小松<span>XiaoSong Zhang</span></div>
                                <div className="position">教务资深顾问</div>
                                <div className="box">
                                    <div className="text">长江学者特聘教授</div>
                                    <div className="text">电子科技大学博士生导师</div>
                                </div>
                                <div className="goodAt">擅长领域：网络安全、大数据应用、区块链</div>
                                <div className="goodAt">简介：国家重点研发计划网络空间安全专项首席科学家，2017国家十大网络安全优秀人才，电子科技大学网络空间安全研究中心主任，政府治理大数据应用技术国家工程实验室技术专家委员会副主任，国防科技工业网络安全创新中心专家委员会委员，教育部科技委国防学部委员，四川省学术技术带头人。长期致力于网络信息技术安全领域的基础研究和技术攻关，成果在应用中取得重要的社会和经济效益。</div>
                            </div>
                        </div>
                        <div className="list"></div>
                        <div className="list"></div>
                        <div className="list"></div>
                        <div className="list"></div>
                        <div className="list"></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Teacher