import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routers from './routers/index';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './static/css/style.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<ul className="nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/news">News</Link></li>
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
