import React, { Component } from 'react';
class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const home = this.props.store.getState().home;
        const { list } = home;
        return (
            <>
                <ul style={{ marginLeft: '20px' }}>
                    {list.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </>
        );
    }
}

export default Center;
