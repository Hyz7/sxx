import React, {Component} from 'react';
import WOW from 'wow.js'
class MyWOW extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        let wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow.init();
    }

    /**
     * data-wow-duration（动画持续时间）、
     * data-wow-delay（动画延迟时间）、
     * data-wow-offset（元素的位置露出后距离底部多少像素执行）、
     * data-wow-iteration（动画执行次数）这四个属性可选可不选
     * @returns {*}
     */
    render() {
        return (
            <div
                className = {this.props.className}
                style={this.props.style}
                data-wow-duration={this.props.duration}
                data-wow-delay={this.props.delay}
            >
                {this.props.children}
            </div>
        );
    }
}

export default MyWOW;