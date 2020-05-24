import React, { Component } from 'react';
import { Button } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        };
    }
    setList = () => {
        const myTextVal = this.refs.myText.value;
        this.props.store.dispatch({
            type: 'ADD_TODO',
            playload: myTextVal,
        });
        this.setState({
            msg: '添加成功...',
        });
        setTimeout(() => {});
    };
    lookList = () => {
        this.props.history.push('/center');
    };

    render() {
        const { msg } = this.state;
        return (
            <>
                <input type="text" ref="myText" />
                <Button onClick={this.setList.bind(this)}>添加</Button>
                <div style={{ fontSize: '12px' }}>
                    {msg}
                    {msg === '' ? null : (
                        <i onClick={this.lookList.bind(this)}>点击查看</i>
                    )}
                </div>
            </>
        );
    }
}

export default Home;
