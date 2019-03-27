import React, {Component} from 'react';
import 'dplayer/dist/DPlayer.min.css'
import DPlayer from 'react-dplayer';

// const url='https://s3.cn-northwest-1.amazonaws.com.cn/bucket1545820957450/lucene.mp4'

class MyDPlayer extends Component {
    constructor(props){
        super(props)
        this.state={
            url:this.props.url
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
        this.setState({url: nextProps.url});
    }
    render() {
        console.log(this.props.url,'***************-------------')
        return (
            <div style={{width:'800px',height:'500px',margin:'0 auto'}}>
                {/*<div style={{width:'800px',height:'500px',margin:'0 auto'}} id="player"></div>*/}
                <DPlayer
                    video={{url:"https://s3.cn-northwest-1.amazonaws.com.cn/sxx-media/lucene_1553654632994.mp4"}}
                    loop={false}
                    screenshot={true}
                    // onLoad={this.onLoad}
                    onPlay={this.onPlay}
                    onCanplay={this.onCanplay}
                    onPause={this.onPause}
                    onEnded={this.onEnded}
                    onError={this.onError}
                    onPlaying={this.onPlaying}
                />
            </div>
        );
    }
    seek=()=> {
        this.dp.seek(10);
    }

    play=()=> {
        this.dp.play();
    }

    pause=()=> {
        this.dp.pause();
    }

    /*onLoad(dp) {
        this.dp = dp;
        console.log(dp, dp.video);
    }*/

    onCanplay=()=>{
        this.setState({
            canplay: true
        });
    }

    onPlay=()=> {
        this.setState({
            play: true
        });
    }

    onPause=()=> {
        this.setState({
            play: false
        });
    }

    onEnded=()=> {
        console.log("end");
    }

    onError=()=> {
        console.log("error");
    }

    onPlaying=()=> {
        this.setState({
            currentTime: this.dp.video.currentTime
        });
    }
}

export default MyDPlayer;