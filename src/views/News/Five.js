import React, { Component } from 'react';

import {connect} from 'react-redux';

class Five extends Component{
    
    getStoreMsg() {
        return this.props.message;
    }

    changeStoreMessage(){
        console.log(11)
    }

    render(){
        return (
            <div className="page">
                {this.getStoreMsg()}
                <br/>
                <button onClick={this.changeStoreMessage.bind(this)}>change message</button>
            </div>
        )
    }
}

export default connect((state) => ({
    ...state //此时的state就是store数据
  }))(Five);;