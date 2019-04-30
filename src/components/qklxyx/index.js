import React, {Component,PureComponent} from 'react';
import FloatWin from "../../common/floatWindow";
import sxxImg from "../../images/sxxbanner.png";
import jiaoda from '../../images/home/media/jiaoda.png'
import shiyou from '../../images/home/media/shiyou.png'
import gongda from '../../images/home/media/gongda.png'
import {Link} from 'react-router-dom'
import MyPlayer from '../../common/video'
import {connect} from 'react-redux'
import * as actionCreator from '../../store/actionCreators'

class Qklxyx extends Component {

    componentDidMount() {
        this.props.getMediaDetail(this.props.location.pathname.substring(8))
        this.props.getMediaList()
    }

    handleChangePage=(id)=>{
        this.props.getMediaDetail(id)
        this.props.history.replace('/qklxyx/'+id)
    }


    render() {
        return (
            <div className='qklxyx-container'>
                <FloatWin />
                <div className="qklxyx-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="qklxyx-content">
                    <div className="qklxyx-title">{this.props.mediaDetail.title}</div>
                    <MyPlayer
                        className="video"
                        poster={gongda}
                        url={this.props.mediaDetail&&this.props.mediaDetail.videoUrl}
                        width={750} height={480}
                        autoPlay={false}
                    />
                    <div className="desc">
                        {this.props.mediaDetail.content}
                    </div>
                </div>
                <div className="qklxyx-list">
                    <div className="qklxyx-title">更多校园行</div>
                    <div className="list">
                        {this.props.mediaList&&this.props.mediaList.map(item=>{
                            return (
                                <Link to={'/qklxyx/'+item.id} onClick={()=>{this.handleChangePage(item.id)}} className="item" key={item.id}>
                                    <img src={item.image} alt=""/>
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-desc">{item.content}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state)=>({
    mediaDetail:state.xyx.mediaDetail,
    mediaList:state.xyx.mediaList
}),(dispatch)=>({
    getMediaDetail(id){
        dispatch(actionCreator.getMediaList(id))
    },
    getMediaList(){
        dispatch(actionCreator.getMediaList())
    }
}))(Qklxyx);