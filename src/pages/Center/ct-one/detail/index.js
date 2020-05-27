import React, { Component } from 'react';

class Detail extends Component{
    render() {
        return (
            <div className="child-page">
                <button onClick={this.handlePop.bind(this)}>返回</button>
                详情
            </div>
        );
    }
}

export default Detail;