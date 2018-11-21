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
                        <div className="list"></div>
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