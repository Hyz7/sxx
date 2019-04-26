import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
class MySwiper extends Component {
    componentDidMount() {
        console.log(this.props.imageData)
    }

    render() {
        return (
            <Swiper {...this.props.params} >
                {this.props.imageData?this.props.imageData.map((item)=>{
                    return <div key={item.bannerId}><img src={item.bannerImage} alt="区块链"/></div>
                }):null}
            </Swiper>
        );
    }
}

export default MySwiper;