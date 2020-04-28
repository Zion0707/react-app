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
            message:'react is cool！'
        }
    }

    dels(index){
        console.log(index)
    }

    render(){
        return (
            <div className="page">
                <TodoList deletes={this.dels} list={this.state.list} message={this.state.message}/>
            </div>
        )
    }
}

export default Three;