import React, { Component } from 'react';

import { Table } from 'antd';

class Two extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                  id: '1',
                  name: '胡彦斌',
                  age: 32,
                  address: '西湖区湖底公园1号',
                },
                {
                  id: '2',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
              ]
        }
    }



    TestTool(item){
        console.log(item);
    }

    render(){
        let state = this.state;
        return (
            <div className="page">
                <strong>创建路灯</strong>
                <br/>
                
                <div className="mt10">
                    
                    <Table rowKey="id" dataSource={state.list} columns={[
                        {
                            title:'姓名',
                            dataIndex:'name',
                            id:'name',
                        },
                        {
                            title:'年龄',
                            dataIndex:'age',
                            id:'age'
                        },
                        {
                            title:'操作',
                            dataIndex:'tool',
                            render:(text, item)=>{
                                return <button onClick={this.TestTool.bind(this, item)}>获取</button>
                            }
                        }
                    ]} />

                </div>
            </div>
        )
    }
}
export default Two;