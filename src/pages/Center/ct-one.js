import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CtOne extends Component {
    render() {
        return (
            <div className="child-page">
                <Link to="/center">返回</Link>
                中心栏目一
            </div>
        );
    }
}

export default CtOne;
