import React, {Component} from 'react';

import DPlayer from 'react-dplayer';

const url='https://s3.cn-northwest-1.amazonaws.com.cn/bucket1545820957450/lucene.mp4'

class MyDPlayer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div style={{width:'800px',height:'500px',margin:'0 auto'}}>
                <DPlayer video={{url:url }}/>
            </div>

        );
    }
}

export default MyDPlayer;