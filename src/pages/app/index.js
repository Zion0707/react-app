import React, { Component } from 'react';
import {
    NavLink as Link,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import Test from '@/pages/test';
import routers from '@/routers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Router>
                    <div className="page">
                        {routers.map((route, key) => {
                            return (
                                <Route
                                    key={key}
                                    exact={route.exact}
                                    path={route.path}
                                    render={(props) => (
                                        <route.component
                                            {...props}
                                            routes={route.child}
                                        />
                                    )}
                                />
                            );
                        })}
                        <Route path="/test" component={Test} />
                    </div>
                    <div className="nav">
                        {routers.map((route, key) => {
                            return (
                                <Link
                                    key={key}
                                    exact={route.exact}
                                    to={route.path}
                                    activeClassName="active"
                                >
                                    {route.name}
                                </Link>
                            );
                        })}
                    </div>
                </Router>
            </>
        );
    }
}
export default App;
