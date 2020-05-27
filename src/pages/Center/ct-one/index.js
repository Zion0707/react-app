import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink as Link,
} from 'react-router-dom';

class CtOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handlePop = () => {
        this.props.history.goBack();
    };
    render() {
        const { routes, location, history } = this.props;
        return (
            <Router>
                <div className="child-page">
                    <button onClick={this.handlePop.bind(this)}>返回</button>
                    中心栏目一
                    <Link to="/center/one/detail">去详情</Link>
                    {routes.map((route, key) => {
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
                </div>
            </Router>
        );
    }
}

export default CtOne;
