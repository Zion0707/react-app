import React, { Component } from 'react';
import { Button } from 'antd';

import {connect} from 'react-redux';
import store from '@/store/index';

class Test extends Component{
    
    getStoreTodos(){
        return this.props.todos;
    }

    delTodos(){
        var arr = this.getStoreTodos();
        arr.splice(0, 1);
        store.dispatch({type:'DELETE_TODO', data: arr});
    }

    render(){
        let todos = this.getStoreTodos();
        return(
            <div style={{padding:'20px'}}>  
                <ul>
                    {   
                        todos.map((item, index)=>{
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>

                <Button type="primary" onClick={this.delTodos.bind(this)}>删除</Button>
            </div>
        )
    }
}

export default connect((state) => ({
    ...state //此时的state就是store数据，并把 store 数据注册到 props 中
  }))(Test);

