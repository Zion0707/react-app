import React, { Component } from 'react';
import { Result, Button } from 'antd';

class NotFound extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back Home</Button>}
                />
            </div>
        )
    }
}

export default NotFound;