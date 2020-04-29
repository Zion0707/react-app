import React, { Component } from 'react';

import {connect} from 'react-redux';

class Four extends Component{
    
    getStoreMsg() {
        return this.props.message;
    }
    render(){
        return (
            <div className="page">
                {this.getStoreMsg()}
            </div>
        )
    }
}

export default connect((state) => ({
    ...state //此时的state就是store数据
  }))(Four);;