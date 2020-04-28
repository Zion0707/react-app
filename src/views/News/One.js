import React, { Component } from 'react';
import httpApi from '@/http/index.js';

import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;



class One extends Component{
    constructor(props){
        super(props);

        this.state={
            list:[]
        }
    }

    componentDidMount(){
        this.getLightList();
    }

    // 获取路灯列表
    getLightList(){
        var _self = this;
        // 获取路灯列表
        httpApi.httpGet({
            url:'/light/list',
            callback:(res)=>{
                _self.setState({
                    list: res.list
                })
            }
        });
    }

    // 删除单个路灯
    methodsDelListItem(item){
        var _self = this;
        var { id } = item;
        confirm({
            title: '温馨提示',
            icon: <ExclamationCircleOutlined />,
            content: '您确定要删除该条数据？',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                httpApi.httpPost({
                    url:'/light/remove',
                    params:{
                        id
                    },
                    callback:(res)=>{
                        message.success({
                            content:'删除成功！',
                            onClose:()=>{
                                _self.getLightList();
                            }
                        });
                    }
                });
            },
            onCancel() {

            },
        });

    }
    
    render(){
        // console.log(this.props)
        return (
            <div className="page">
                <strong>路灯操作</strong>

                <ul className="mt10">
                    {
                        this.state.list.map((item, index)=>{
                            return <li key={index}>
                                        { item.name }
                                        <span style={{ color:'blue', cursor:'pointer' }} onClick={this.methodsDelListItem.bind(this, item)}>del</span>
                                    </li>
                        })
                    }
                </ul>
            </div>  
        )
    }
}
export default One;