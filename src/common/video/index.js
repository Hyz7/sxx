import React, {Component} from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class MyPlayer extends Component {
    render() {
        return (
            <div>
                <Player
                    playsInline
                    poster="../../images/title.png"
                    src={this.props.url}
                    fluid={false}
                    height={400}
                    width={1120}
                    autoPlay={true}
                />
            </div>
        );
    }
}

export default MyPlayer;