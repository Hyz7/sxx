import React,{Component,Fragment} from 'react'
import Swiper from 'react-id-swiper';

let defaultImg=[]

const params = {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    pagination: {
        el: '.swiper-pagination'
    }
}
export default class SwiperItem extends Component{
    constructor(props){
        super(props)
        this.props
    }
    componentDidMount(){

    }
    render(){
        return (
            <Fragment>
                <Swiper {...params}>
                    {this.props.slides.map((item)=>{
                        <div><img src={item.img} alt=""/></div>
                    })}
                    {/*<div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>
                    <div><img src={require("../../images/banner.png")} alt=""/></div>*/}
                </Swiper>
            </Fragment>
        )
    }
}