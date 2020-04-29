import React, { Component } from 'react';

import {connect} from 'react-redux';
import store from '@/store/index';

class Five extends Component{
    constructor(props){
        super(props);
    }

    //获取store的message值 
    getStoreMsg() {
        return this.props.message;
    }

    // 更改store的message值
    changeStoreMessage(){
        store.dispatch({type: 'CHANGE_MESSAGE', data: '更改成了栏目五数据'})
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
    ...state //此时的state就是store数据，并把 store 数据注册到 props 中
  }))(Five);;