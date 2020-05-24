import React from 'react';
import Loadable from 'react-loadable';
const routers = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Loadable({
            loader: () => import('@/pages/home'),
            loading: () => {
                return <div>loading</div>;
            },
        }),
        child: [],
    },
    {
        path: '/center',
        name: '中心',
        component: Loadable({
            loader: () => import('@/pages/center'),
            loading: () => {
                return <div>loading</div>;
            },
        }),
        child: [],
    },
];

export default routers;
