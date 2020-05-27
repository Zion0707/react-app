import React, { Component } from 'react';
import { Route, NavLink as Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/**
 * 注意：
 * 子级不需要 BrowserRouter as Router 设置到最外层，这样就可以避免了父级路由，还显示着子级组件内容！
 */
class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    render() {
        const { routes, location, history } = this.props;
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
                    <TransitionGroup
                        style={{ position: 'releative' }}
                        childFactory={(child) =>
                            React.cloneElement(child, {
                                classNames:
                                    history.action === 'PUSH'
                                        ? 'page-push'
                                        : 'page-pop',
                            })
                        }
                    >
                        <CSSTransition
                            key={location.pathname}
                            timeout={500}
                            classNames={
                                history.action === 'PUSH'
                                    ? 'page-push'
                                    : 'page-pop'
                            }
                        >
                            <Switch location={location}>
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
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </>
        );
    }
}

export default Center;
