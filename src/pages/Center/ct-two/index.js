import React, { Component } from 'react';

class CtTwo extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    handlePop=()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="child-page">
                <button onClick={this.handlePop.bind(this)}>返回</button>
                中心栏目二
            </div>
        );
    }
}

export default CtTwo;
