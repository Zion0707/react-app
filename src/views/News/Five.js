import React, { Component } from 'react';

import {connect} from 'react-redux';
import store from '@/store/index';

class Five extends Component{
    constructor(props){
        super(props);

        console.log(store.getState());
    }
    getStoreMsg() {
        return this.props.message;
    }

    changeStoreMessage(){
        store.dispatch({type: 'CHANGE_MESSAGE', payload: '数据'})

        console.log(store.getState());
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