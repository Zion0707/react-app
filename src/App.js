import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import routers from './routers/index';
import 'antd/dist/antd.css';
// import { Button } from 'antd';
import './static/css/theme.less';
import './static/css/style.css';
import NotFound from './views/NotFound';


class App extends Component {
	
	// 清除存储
	clearStorage(){
		localStorage.clear();
	}

	render() {
		return (
			<div className="App">
				<Router>
					<ul className="nav">
						{
							routers.map((route, key)=>{
								return <li key={key}>
											<NavLink to={route.path} exact activeClassName="active">
												{route.name}
											</NavLink>
										</li>
							})
						}
						<li style={{float:'right', cursor:'pointer'}} onClick={ this.clearStorage.bind(this) }>清除存储</li>
					</ul>

					<Switch>
						{
							routers.map((route, key) => {
								if (route.exact) {
									return <Route key={key} exact path={route.path} 
										render={props=>(
											<route.component {...props} child={route.child} />
										)}
									/>
								} else {
									return <Route key={key} path={route.path} 
										render={props=>(
											<route.component {...props} child={route.child} />
										)}
									/>
								}
							})
						}

						<Route  component={NotFound} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;
