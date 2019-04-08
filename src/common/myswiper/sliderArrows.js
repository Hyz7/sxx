import React, {Component} from 'react';

class SliderArrows extends Component {
    handleDotClick=(i)=> {
        let option = i - this.props.nowLocal;
        this.props.turn(option);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SliderArrows;