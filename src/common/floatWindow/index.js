import React, {Component} from 'react';

class FloatWin extends Component {
    backTop=()=>{
        document.documentElement.scrollTop=0
    }

    scrollToptimer=()=>{
        let timer=setInterval(function () {
            console.log("定时循环回到顶部")
            let top = document.body.scrollTop || document.documentElement.scrollTop;
            let speed = top / 4;
            if (document.documentElement.scrollTop!==0) {
                document.documentElement.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top === 0) {
                clearInterval(timer);
            }
        }, 30);
    }

    render() {
        return (
            <div className='float-container' id='container'>
                <a className="qqContact" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2507819723:52" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
                <img src={require('../../images/sxxfloat.png')} alt=""/>
                <div className="toTop" onClick={()=>{this.scrollToptimer()}}></div>
            </div>
        );
    }
}

export default FloatWin;