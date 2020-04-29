import React, { Component } from 'react';

import TodoList from '@/components/TodoList';

class Three extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                '电流',
                '电压',
                '母排'
            ],
            message:'react is cool！',
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
            </div>
        )
    }
}

export default Three;