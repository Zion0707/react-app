import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class News extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let {match, routers} = this.props;

        return (
            <div className="page">
                <Router>
                    <div className="content">

                        <ul className="slider">
                            <li>* <Link to={`${match.url}`}>one</Link></li>
                            <li>* <Link to={`${match.url}/two`}>two</Link></li>
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
