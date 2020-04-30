import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

class News extends Component{
    constructor(props) {
        super(props);
        
        this.state={
            activeLink: window.location.pathname
        }
    }

    render() {
        let { routers } = this.props;

        return (
            <div className="page">
                <Router>
                    <div className="content">

                        <ul className="slider">
                            {
                                routers.map((route, key)=>{
                                    return  <li key={key}>
                                                <NavLink to={route.path} exact activeClassName="active">{route.name}</NavLink>
                                            </li>
                                })
                            }
                        </ul>

                        <div className="main">
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
                        </div>

                    </div>{/* content */}
                    

                </Router>
            </div>
        )
    }
}
export default News;
