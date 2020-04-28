import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routers from './routers/index';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './static/css/style.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLink: 0
		}
	} 
	render() {
		return (
			<div className="App">
				<Router>
					<ul className="nav">
						{
							routers.map((route, key)=>{
								return <li key={key}>
											<Link to={route.path} className={window.location.pathname===route.path?'active':''}>
												{route.name}
											</Link>
										</li>
							})
						}
						
					</ul>

					<Switch>
						{
							routers.map((route, key) => {
								if (route.exact) {
									return <Route key={key} exact path={route.path} 
										render={props=>(
											<route.component {...props} routers={route.routers} />
										)}
									/>
								} else {
									return <Route key={key} path={route.path} 
										render={props=>(
											<route.component {...props} routers={route.routers} />
										)}
									/>
								}
							})
						}
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;
