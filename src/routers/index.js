// import React from 'react';
// import Loadable from 'react-loadable';

import Home from '@/pages/home';
import Center from '@/pages/center';
import CtOne from '@/pages/center/ct-one';
import CtOneDetail from '@/pages/center/ct-one/detail';
import CtTwo from '@/pages/center/ct-two';

const routers = [
    {
        name: '首页',
        path: '/',
        component: Home,
        exact: true,
        child: [],
    },
    {
        name: '中心',
        path: '/center',
        component: Center,
        child: [
            {
                name: '中心一',
                path: '/center/one',
                component: CtOne,
                exact: true,
                child: [
                    {
                        name: '中心一详情',
                        path: '/center/one/detail',
                        component: CtOneDetail,
                        exact: true,
                        child: [],
                    },
                ],
            },
            {
                name: '中心二',
                path: '/center/two',
                component: CtTwo,
                child: [],
            },
        ],
    },
];

export default routers;
