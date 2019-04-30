import React, {Component} from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class MyPlayer extends Component {

    render() {
        return (
            <div>
                <Player
                    playsInline
                    poster={this.props.poster}
                    src={this.props.url}
                    fluid={false}
                    height={this.props.height}
                    width={this.props.width}
                    autoPlay={this.props.autoPlay}
                />
            </div>
        );
    }
}

export default MyPlayer;