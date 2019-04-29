import React, {Component} from 'react';
import FloatWin from "../../common/floatWindow";
import sxxImg from "../../images/sxxbanner.png";
import jiaoda from '../../images/home/media/jiaoda.png'
import shiyou from '../../images/home/media/shiyou.png'
import gongda from '../../images/home/media/gongda.png'
import MyPlayer from '../../common/video'
class Index extends Component {
    render() {
        return (
            <div className='qklxyx-container'>
                <FloatWin />
                <div className="qklxyx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="qklxyx-content">
                    <div className="qklxyx-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                    {/*<MyPlayer url={'...'} width={750} height={480}/>*/}
                    <div className="video"></div>
                    <div className="desc">
                        成都市大数据协会区块链专委会“区块链校园行”走进成都信息工程大学。此次活动邀请到微众银行区块链高级产品经理、FISCO BCOS开源社区高级运营经理赵锦哲和电子科技大学副教授、成都市大数据协会区块链专委会特聘专家桂勋进行专题分享。
                    </div>
                </div>
                <div className="qklxyx-list">
                    <div className="qklxyx-title">更多校园行</div>
                    <div className="list">
                        <div className="item">
                            <img src={jiaoda} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                        <div className="item">
                            <img src={shiyou} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                        <div className="item">
                            <img src={gongda} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                        <div className="item">
                            <img src={jiaoda} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                        <div className="item">
                            <img src={shiyou} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                        <div className="item">
                            <img src={gongda} alt=""/>
                            <div className="item-title">区块链校园行NO.5 ▪ 走进西南石油大学</div>
                            <div className="item-desc">详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容....</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;