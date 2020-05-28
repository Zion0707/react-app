import React, { Component } from 'react';

import { NavLink, Route } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // 渲染menus
    getMenus(routers) {
        return routers.map(item => {
            return item.child.length ? (
                <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <i className={`action iconfont ${item.icon}`}></i>
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {this.getMenus(item.child)}
                </SubMenu>
            ) : (
                <Menu.Item key={item.path}>
                    <NavLink to={item.path}>
                        {item.icon && (
                            <i className={`action iconfont ${item.icon}`}></i>
                        )}
                        <span>{item.name}</span>
                    </NavLink>
                </Menu.Item>
            );
        });
    }
    // 选择menus页面内容
    getMenusCon(routers) {
        // 利用递归形式渲染深层，把深层component铺开成为一层
        return routers.map((item, key) => {
            return item.child.length ? (
                this.getMenusCon(item.child)
            ) : (
                <Route
                    key={key}
                    exact={item.exact}
                    path={item.path}
                    render={props => (
                        <item.component {...props} routers={item.routers} />
                    )}
                />
            );
        });
    }

    //获取当前menus要展开的向上父级菜单
    getDefaultOpenKeys(pathname) {
        var pnArr = pathname.split('/');
        pnArr.shift();
        var resArr = [];
        var prevPath = '';
        pnArr.forEach((item, key) => {
            if (pnArr[key + 1] !== undefined) {
                prevPath +='/' + item;
                resArr.push(prevPath);
            }
        });

        console.log(resArr);
        return resArr;
    }

    componentDidMount() {}

    render() {
        const { routers, location } = this.props;
        return (
            <>
                <Menu
                    style={{ width: 230 }}
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={[location.pathname]}
                    defaultOpenKeys={this.getDefaultOpenKeys(location.pathname)}
                >
                    {this.getMenus(routers)}
                </Menu>

                {this.getMenusCon(routers)}
            </>
        );
    }
}

export default Menus;
