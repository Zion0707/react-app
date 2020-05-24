import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={    
            childText:'子组件文本，在父组件中显示'
        }
    }

    componentDidMount(){
        this.props.onValue(this.state)
    }

    render(){
        return (
            <>
                todolist
            </>
        )
    }
}

export default TodoList;