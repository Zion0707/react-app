import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('加载...');
    }
    handlePop = () => {
        this.props.history.goBack();
    }
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
