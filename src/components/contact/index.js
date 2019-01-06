import React,{Component} from 'react'
import { Map,Marker,Navigation,Animation,Label, WalkingRoute, getPoiByKeyword,InfoWindow } from "rc-bmap";
import sxxImg from '../../images/sxxbanner.png'
import FloatWin from '../../common/floatWindow'
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

const mapMounted = map => {
    Promise.all([
        getPoiByKeyword("金融城地铁A"),
        getPoiByKeyword("成都天府新谷10号楼")
    ]).then(res => {
        route.search(res[0], res[1]);
    });
};
export default class ContactUs extends Component{
    render(){
        return(
            <div className='map-container'>
                <FloatWin />
                <div className="map-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="map-position">
                    <div className="title">来校路线</div>
                    <div className="map-box">
                        <Map
                            ak="a5t6H5vas5gWEUzn4bqUVfN0VS5lGxkR"
                            placeHolder="玩命加载中!!!"
                            center={centerPoint}
                            zoom={17}
                            style={{width:'100%',height:'100%'}}
                            scrollWheelZoom
                            mapMounted={mapMounted}
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
                            {/*<Navigation />*/}
                            {/*<Label
                                content="天府新谷10号楼20层" // 显示标签，支持html
                                point={point} // 标签显示坐标
                                offset={offset} // 偏移值
                                massClear={false} // 地图clearOverlays()时，是否清空
                                title="天府新谷10号楼20层" // 鼠标悬浮显示文字
                                events={events} // 绑定事件
                                zIndex={100} // 同html的z-index
                                style={style} // 标签样式
                            />*/}
                            {/*<WalkingRoute
                                getInstance={getRoute}
                                showInMap
                            />*/}
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