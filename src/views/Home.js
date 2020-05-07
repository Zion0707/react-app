import React, { Component } from 'react';
class Home extends Component {
    clickMyBtn(){
        for(var i=0;i<3;i++){
            
            console.log(i);
        }
    }
    render() {
		return (
            <div className="page">
                home
                <button onClick={this.clickMyBtn.bind(this)}>点击</button>
            </div>
        )
    }
}
export default Home;

