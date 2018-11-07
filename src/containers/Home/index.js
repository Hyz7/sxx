import React,{Component} from 'react'
import Swiper from 'react-id-swiper';


export default class Home extends Component{
    render() {
        const params = {
            effect: 'cube',
            grabCursor: true,
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
        return(
            <Swiper {...params}>
                <div><img src={require("../../images/banner.png")} alt=""/></div>
                <div><img src={require("../../images/banner.png")} alt=""/></div>
                <div><img src={require("../../images/banner.png")} alt=""/></div>
                <div><img src={require("../../images/banner.png")} alt=""/></div>
            </Swiper>
        )
    }
}
