import React, { Component } from 'react';

import TodoList from '@/components/TodoList';

import store from '@/store/index';

class Three extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                '电流',
                '电压',
                '母排'
            ],
            childText:'',
        }
    }


    getTodoListState(value){
        var { childText } = value;
        this.setState({
            childText,
        })
    }

    render(){
        let state = this.state;
        return (
            <div className="page">
                {state.childText}
                <br/>
                <TodoList onValue={this.getTodoListState.bind(this)}/>
                <br/>
            </div>
        )
    }
}

export default Three;