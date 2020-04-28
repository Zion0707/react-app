import React, { Component } from 'react';

class One extends Component{
    constructor(props){
        super(props);

        this.state={
            list:[
                {id:0,value:111},
                {id:1,value:222},
                {id:2,value:333},
            ]
        }
    }
    componentDidMount(){
        
    }

    // 删除list子对象
    methodsDelListItem(index){
        console.log(index)  
    }
    
    render(){
        console.log(this.props)

        return (
            <div className="page">
                one
                <br/>
                
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return <li key={index}>
                                        { item.value } 
                                        <span style={{ color:'blue', cursor:'pointer' }} onClick={this.methodsDelListItem.bind(this, index)}>del</span>
                                    </li>
                        })
                    }
                </ul>
            </div>  
        )
    }
}
export default One;