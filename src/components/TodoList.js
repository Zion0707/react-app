import React, { Component } from 'react';

class TodoList extends Component{
    componentDidMount(){

    }

    dels(item){
        this.props.deletes(item);
    }
    render(){
        var {list, message} = this.props;
        return (
            <div className="todo-list">
                todolist
                <ul>
                    {
                        list.map((item, index)=>{
                            return <li key={index} onClick={this.dels.bind(this, item)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;