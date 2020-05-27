import React, { Component } from 'react';
import { Route, NavLink as Link } from 'react-router-dom';
/**
 * 注意：
 * 子级不需要 BrowserRouter as Router 设置到最外层，这样就可以避免了到了父级
 * 路由，还显示着子级组件内容！
 */
class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    render() {
        let { routes } = this.props;
        return (
            <>
                <div className="center">
                    Center
                    <br />
                    <ul>
                        {routes.map((route, key) => {
                            return (
                                <li key={key}>
                                    <Link exact={route.exact} to={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {routes.map((route, key) => {
                        return (
                            <Route
                                key={key}
                                exact={route.exact}
                                path={route.path}
                                render={(props) => (
                                    <route.component
                                        {...props}
                                        routes={route.children}
                                    />
                                )}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}

export default Center;
