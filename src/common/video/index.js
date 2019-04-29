import React, {Component} from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class MyPlayer extends Component {
    render() {
        return (
            <div>
                <Player
                    playsInline
                    poster=""
                    src={this.props.url}
                    fluid={false}
                    height={this.props.width}
                    width={this.props.height}
                    autoPlay={true}
                />
            </div>
        );
    }
}

export default MyPlayer;