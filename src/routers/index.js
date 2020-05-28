import React from 'react';
import Loadable from 'react-loadable';

const LoadDom = function () {
    return <div>loading...</div>;
};
const routers = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Loadable({
            loader: () => import('@/pages/home'),
            loading: LoadDom,
        }),
        child: [],
    },
    {
        path: '/center',
        name: '中心',
        component: Loadable({
            loader: () => import('@/pages/center'),
            loading: LoadDom,
        }),
        child: [],
    },
    {
        path: '/menus',
        name: '菜单',
        component: Loadable({
            loader: () => import('@/pages/menus'),
            loading: LoadDom,
        }),
        child: [
            {
                path: '/menus/one',
                name: '菜单1',
                component: Loadable({
                    loader: () => import('@/pages/menus/one'),
                    loading: LoadDom,
                }),
                child: [],
            },
            {
                path: '/menus/two',
                name: '菜单2',
                component: Loadable({
                    loader: () => import('@/pages/menus/two'),
                    loading: LoadDom,
                }),
                child: [
                    {
                        path: '/menus/two/two-1',
                        name: '菜单2-1',
                        component: Loadable({
                            loader: () => import('@/pages/menus/two/two-1'),
                            loading: LoadDom,
                        }),
                        child: [
                            {
                                path: '/menus/two/two-1/tow-1-1',
                                name: '菜单2-1-1',
                                component: Loadable({
                                    loader: () => import('@/pages/menus/two/two-1/tow-1-1'),
                                    loading: LoadDom,
                                }),
                                child: [],
                            },
                            {
                                path: '/menus/two/two-1/two-1-2',
                                name: '菜单2-1-2',
                                component: Loadable({
                                    loader: () => import('@/pages/menus/two/two-1/tow-1-2'),
                                    loading: LoadDom,
                                }),
                                child: [],
                            },
                        ],
                    },
                    {
                        path: '/menus/two/two-2',
                        name: '菜单2-2',
                        component: Loadable({
                            loader: () => import('@/pages/menus/two/two-2'),
                            loading: LoadDom,
                        }),
                        child: [],
                    },
                ],
            },
        ],
    },
];

export default routers;
