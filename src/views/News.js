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
                news
                
                <Router>
                    <div>
                    * <Link to={`${match.url}`}>one</Link>
                    * <Link to={`${match.url}/two`}>two</Link>
                    </div>

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
export default News;
