import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import lodashId from "lodash/uniqueId";
class MySwiper extends Component {
    componentDidMount() {
        console.log(this.props.imageData)
    }

    render() {

        return (
            <Swiper {...this.props.params} >
                {/*{this.props.imageData?this.props.imageData.map((item)=>{
                    return <div key={lodashId()}><img src={item} alt="区块链"/></div>
                }):null}*/}
                <div><img src={require("../../images/home/banner4.png")} alt="区块链"/></div>
                <div><img src={require("../../images/home/banner6.png")} alt="区块链"/></div>
                <div><img src={require("../../images/home/banner1-pc.png")} alt="区块链"/></div>
            </Swiper>
        );
    }
}

export default MySwiper;