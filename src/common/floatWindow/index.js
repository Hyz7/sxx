import React, {Component} from 'react';

class FloatWin extends Component {
    backTop=()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    scrollToptimer=()=>{
        // document.documentElement.scrollTop=0
        let timer=setInterval(function () {
            let top = document.body.scrollTop || document.documentElement.scrollTop;
            // let speed = top / 4;
            let speed = 20;
            if (top!==0) {
                top -= speed;
                if(top<20){
                    top=0
                }
            }else {
                top -= speed;
            }
            if (top === 0) {
                clearInterval(timer);
            }
        }, 5);
    }

    render() {
        return (
            <div className='float-container' id='container'>
                <a className="qqContact" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2507819723:52" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
                <img src={require('../../images/sxxfloat.png')} alt=""/>
                <a className="toTop" href="javascript: scroll(0, 0)" onClick={()=>{
                    this.scrollToptimer()
                    // this.backTop()
                }}></a>
            </div>
        );
    }
}

export default FloatWin;