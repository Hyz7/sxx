import React, { Component } from 'react';
import { Spin } from 'antd'
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null,
            };
        }
        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        }
        render() {
            const C = this.state.component;
            return C
                ? <C {...this.props} />
                : <div style={{width:'100%',minWidth:'1200px',height:'200px'}}>
                    <Spin size="large" style={{width:'100px',margin:'0 auto',display:'block',lineHeight:'200px'}}/>
                </div>;
        }
    }
    return AsyncComponent;
}