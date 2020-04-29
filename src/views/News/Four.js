import React, { Component } from 'react';

import store from '@/store/index';

class Four extends Component{
    constructor(props){
        super(props);

        this.state = {
            msg: store.getState().msg
        }
    }
    render(){
        return (
            <div className="page">
                {this.state.msg}
            </div>
        )
    }
}

export default Four;