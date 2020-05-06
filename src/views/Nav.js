import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            navMapList: this.props.child,
        };
    }
    
    // 渲染nav
    getNav(navMapList) {
        return navMapList.map((nav) => {
            return nav.child ? (
                <SubMenu
                    key={nav.path}
                    title={
                        <span>
                            <i className={`action iconfont ${nav.icon}`}></i>
                            <span>{nav.name}</span>
                        </span>
                    }
                >
                    {this.getNav(nav.child)}
                </SubMenu>
            ) : (
                <Menu.Item key={nav.path}>
                    <NavLink to={nav.path}>
                        {nav.icon && <i className={`action iconfont ${nav.icon}`}></i>}
                        <span>{nav.name}</span>
                    </NavLink>
                </Menu.Item>
            );
        });
    }

    // 渲染nav内容
    getNavCon(navMapList){
        // 利用递归形式渲染深层
        return navMapList.map((route, key) => {
            return route.child ? 
                ( this.getNavCon(route.child) ) 
                : 
                (<Route key={key} exact={route.exact} path={route.path} 
                    render={props=>(
                        <route.component {...props} routers={route.routers} />
                    )}
                />)
        });
    }
    

    onOpenChange=(openKeys)=>{
        console.log(openKeys);
    }

    render() {
        const { collapsed, navMapList } = this.state;
        const { location, match } = this.props;
        const { pathname } = location;
        const path = pathname.substring(0, pathname.lastIndexOf('/'));
        return (
            <div className="app-nav">
                <Router>
                    <Menu
                        style={{width:230}}
                        defaultSelectedKeys={[pathname]}
                        defaultOpenKeys={[path]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        onOpenChange={this.onOpenChange}
                    >
                        { this.getNav(navMapList) }
                    </Menu>


                    <div className="main">
                        <Switch>
                            { this.getNavCon(navMapList) }
                        </Switch>
                    </div>
                </Router>
          </div>
        );
    }
}

export default Nav;