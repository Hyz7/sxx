import React, {Component} from 'react';
import SliderItem from '../../common/myswiper/slideritem'
// import SliderArrows from '../../common/myswiper/sliderArrows'
import SliderDots from '../../common/myswiper/sliderDots'
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
            index:0
        };
    }

    componentDidMount() {
        this.goPlay();
    }

    goPlay=()=> {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }


    // 暂停自动轮播
    pausePlay=()=> {
        clearInterval(this.autoPlayFlag);
    }

    turn=(n)=> {
        let _n = this.state.nowLocal + n;
        if(_n < 0) {
            _n = _n + this.props.items.length;
        }

        if(_n >= this.props.items.length) {
            _n = _n - this.props.items.length;
        }
        this.setState({nowLocal: _n});
    }
    /*go =(step)=>{ // 去哪  传入要动几个
        let index = this.state.index+step;// 先加的
        if(index > this.props.items.length){ // 当等于最后一张时  越界回到0
            this.$ul.style.transitionDuration = '';// 清除ul上的动画
            this.$ul.style.left = 0;// 回到0处
            setTimeout(()=>{// 等动画移除后并且回到了0点  再增加回动画时间（dom刷新一般是30s）
                this.$ul.style.transitionDuration = this.props.speed+'s';// 再增加回来这个动画
                index = 1;// 下一次该走1了
                this.setState({index});
            },30)
            return;//因为设置了setTimeout所以要等待setTimeout后再设置最新状态
        }
        if(index < 0){// 当小于第一张时  回到最后一张
            this.$ul.style.transitionDuration = '';// 清除ul上的动画
            this.$ul.style.left = this.props.items.length*-1*400+'px';
            setTimeout(()=>{
                this.$ul.style.transitionDuration = this.props.speed+'s';
                index = this.props.items.length -1;
                this.setState({index});
            },30);
            return
        }
        this.setState({
            index:index
        })
    }*/
    render() {
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item, idx) => {
            return <SliderItem item={item} count={count} key={'item' + idx} />;
        });

        // let arrowsNode = <SliderArrows turn={this.turn}/>;
        let dotsNode = <SliderDots turn={this.turn} count={count} nowLocal={this.state.nowLocal} />;
        return (
            <div
                className="slider-container"
                onMouseOver={this.props.pause?this.pausePlay:null}
                onMouseOut={this.props.pause?this.goPlay:null}>
                <ul style={{
                    left: -100 * this.state.nowLocal + "%",
                    transitionDuration: this.props.speed + "s",
                    width: this.props.items.length * 100 + "%"
                }}>
                    {itemNodes}
                </ul>
                {/*{this.props.arrows?arrowsNode:null}*/}
                {this.props.dots?dotsNode:null}
            </div>
        );
    }
}
Slider.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
};
Slider.autoPlayFlag = null;
export default Slider;