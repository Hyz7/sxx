import React, {Component} from 'react';


class Tree extends Component {
    renderTree=(list)=>{
        let listBox=[]

    }

    tree=()=>{

    }

    render() {
        return (
            <div>
                {this.renderTree(this.props.treeList)}
            </div>
        );
    }
}

export default Tree;