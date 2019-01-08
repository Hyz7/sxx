import React, {Component,Fragment} from 'react';

class FloatWin extends Component {
    state={
        visible:true
    }
    componentDidMount() {
        // document.addEventListener('scroll',this.winScroll.bind(this),false);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll',this.winScroll.bind(this),false);
    }

    winScroll=()=>{
        let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scollTop < 700){
            if(this.state.visible){
                this.setState({
                    visible:!this.state.visible
                })
            }
            // this.float.style.display='none'
        }else{
            if(!this.state.visible){
                this.setState({
                    visible:!this.state.visible
                })
            }
            // this.float.style.display='block'
        }
    }

    backTop=()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    scrollToptimer=()=>{
        let scollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let timer=setInterval(function () {

            // let speed = top / 4;
            let speed = 20;
            if (scollTop!==0) {
                scollTop -= speed;
                if(top<20){
                    scollTop=0
                }
            }else {
                scollTop -= speed;
            }
            if (scollTop === 0) {
                clearInterval(timer);
            }
        }, 5);
    }

    render() {
        return (
            <Fragment>
                {this.state.visible?
                    <div className='float-container' id='float-container' ref={node=>this.float=node}>
                        <a className="qqContact" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2507819723&site=qq&menu=yes">
                            {/*我要报名*/}
                        </a>
                        <img src={require('../../images/sxxfloat.png')} alt=""/>
                        <a className="toTop" href="javascript: scroll(0, 0)" onClick={()=>{
                            // this.scrollToptimer()
                            // this.backTop()
                        }}></a>

                    </div>:null
                }
            </Fragment>)
    }
}

export default FloatWin;