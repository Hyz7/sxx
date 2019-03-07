import React,{ Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import sxxImg from '../../images/sxxbanner.png'
import QQ from '../../images/qqcontact.png'
import FloatWin from '../../common/floatWindow'
import {getPoiByKeyword, InfoWindow, Map, Marker,Animation} from "rc-bmap";


const centerPoint = { lng: 104.063296, lat: 30.592122 };
const point = {
    lng: 104.063296,
    lat: 30.592122
};
const offset = {
    width: 10,
    height: -10
};

const events = {
    click() {
        // console.log("label click");
    }
};

const style = {
    backgroundColor: "#4E8DEF",
    color: "#fff",
    border:'0'
};
let route;
const getRoute = instance => {
    route = instance;
};

/*const mapMounted = map => {
    Promise.all([
        getPoiByKeyword("金融城地铁A"),
        getPoiByKeyword("成都天府新谷10号楼")
    ]).then(res => {
        route.search(res[0], res[1]);
    });
};*/

class About extends Component{
    componentDidMount(){
        // console.log(this.props)
    }

    render() {
        return(
            <div className='about-container'>
                <FloatWin />
                <div className="about-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="about-position">
                    <div className="about-content">
                        <div className="content-box">
                            <div className="content-title">
                                <div className="title-text">公司简介</div>
                                <div className="title-description">COMPANY INTRODUCTION</div>
                            </div>
                            <div className="desContent">
                                思学行教育科技有限公司是一家专注于新一代信息技术教育（包括：区块链、AI人工智能、大数据、智能物联网等）的培训机构，致力于培养当前企业和社会亟需的新一代信息技术应用型人才，是一家集人才培养、高校科研项目落地、企业专业人才定制培训为一体的教育培训机构。机构采用模块制课程教学，旨在帮助各行各业的求知者，追踪新一代信息技术应用与投资前沿，把握新时代的战略机遇。
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-title">
                                <div className="title-text">平台背景</div>
                                <div className="title-description">CORPORATE BACKGROUND</div>
                            </div>
                            <div className="desContent">
                                思学行平台背景由“成都市大数据协会区块链专委会”指导，“电子科技大学网络空间安全中心”发起，清华大学、浙江大学、四川大学、西南财经大学等多家高校及顶尖企业提供教学资源支持。
                            </div>
                        </div>
                    </div>
                    <div className="contactUs">
                        <div className="content-title">
                            <div className="title-text">联系我们</div>
                            <div className="title-description">CONTACT US</div>
                        </div>
                        <div className="contact-box">
                            <div className="list">
                                <div className="title">成都校区（总校）</div>
                                <div className="box">
                                    {/*<a href="tencent://message/?uin=2507819723&Site=qq&Menu=yes"><img src={QQ} alt=""/></a>*/}
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        <img src={QQ} alt=""/>
                                    </a>
                                    <div className="text">座机：028-85253153</div>
                                    <div className="text">邮箱：sxx@sixuexing.com</div>
                                    <div className="text">企业内训/商务合作:028—85253153</div>
                                    <div className="text" style={{margin:"20px 0"}}>QQ：2507819723</div>
                                    <div className="text">地址：成都高新区吉泰五路88号香年广场3栋14楼2号</div>
                                    <div className="address">
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-didian01'></use>
                                        </svg>
                                        学校地图地址
                                    </div>
                                </div>
                            </div>
                            <div className="list">
                                <div className="title">重庆校区（分校）</div>
                                <div className="box">
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        <img src={QQ} alt=""/>
                                    </a>
                                    <div className="text">座机：028-85253153</div>
                                    <div className="text">邮箱：sxx@sixuexing.com</div>
                                    <div className="text">企业内训/商务合作:028—85253153</div>
                                    <div className="text" style={{margin:"20px 0"}}>QQ：2507819723</div>
                                    <div className="text">地址：成都高新区吉泰五路88号香年广场3栋14楼2号</div>
                                    <div  className="address">
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-didian01'></use>
                                        </svg>
                                        学校地图地址
                                    </div>
                                </div>
                            </div>
                            <div className="list">
                                <div className="title">北京校区（分校）</div>
                                <div className="box">
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                                        <img src={QQ} alt=""/>
                                    </a>
                                    <div className="text">座机：028-85253153</div>
                                    <div className="text">邮箱：sxx@sixuexing.com</div>
                                    <div className="text">企业内训/商务合作:028—85253153</div>
                                    <div className="text" style={{margin:"20px 0"}}>QQ：2507819723</div>
                                    <div className="text">地址：成都高新区吉泰五路88号香年广场3栋14楼2号</div>
                                    <div  className="address">
                                        <svg className='icon-svg'>
                                            <use xlinkHref='#icon-didian01'></use>
                                        </svg>
                                        学校地图地址
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="map-position">
                    <div className="content-title">
                        <div className="title-text">来校路线</div>
                        <div className="title-description">ROUTE TO SCHOOL</div>
                    </div>
                    {/*<div className="title">来校路线</div>*/}
                    <div className="map-box">
                        <Map
                            ak="a5t6H5vas5gWEUzn4bqUVfN0VS5lGxkR"
                            placeHolder="玩命加载中!!!"
                            center={centerPoint}
                            zoom={17}
                            style={{width:'100%',height:'100%'}}
                            scrollWheelZoom
                        >
                            <Marker point={point} animation={Animation.BOUNCE}/>
                            <InfoWindow
                                title="<p style='font-weight:bold;height:20px;margin-bottom:5px'>成都总部(思学行教育培训基地)</p>" // 信息窗标题文字，支持HTML内容
                                content="<div>
                                <div style='display:flex;flex-wrap:nowrap;height:20px;'>
                                <p style='font-weight:bold;'>公司地址：</p>四川省成都市武侯区府城大道西段399号 天府新谷10号楼20层
                                </div>
                                <div style='display:flex;flex-wrap:nowrap;height:20px;'>
                                <p style='font-weight:bold;'>公司电话：</p>028-8525-3153
                                </div>
                                </div>" // 信息窗显示文字，支持HTML内容
                                point={point} // 显示位置坐标
                                offset={offset} // 信息窗位置偏移值。
                                width={0} // 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
                                height={0} // 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
                                maxWidth={250} // 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
                                autoPan={false} // 是否开启信息窗口打开时地图自动移动（默认开启）
                                closeOnClick={false} // 是否开启点击地图关闭信息窗口（默认开启）
                                displayMessage={false} // 是否在信息窗里显示短信发送按钮（默认开启）
                                message="短信内容" // 自定义部分的短信内容
                                events={events} // 绑定事件
                            />
                        </Map>
                    </div>
                    <div className="route">
                        <div className="text">地点：四川省成都市武侯区府城大道西段399号  天府新谷10号楼20层</div>
                        <div className="text">路线1：地铁1号线金融城站（A口/D口出）步行1.1公里到达地点</div>
                        <div className="text">路线2：地铁1号线高新站（B口/C口出）步行1.7公里到达地点</div>
                        <div className="text">附近公交站：成汉南路锦辉西二街口、市一医院、府城大道一医院、府城大道益州大道口</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About)