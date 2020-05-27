// import React from 'react';
// import Loadable from 'react-loadable';

import Home from '@/pages/home';
import Center from '@/pages/center';
import CtOne from '@/pages/center/ct-one';
import CtTwo from '@/pages/center/ct-two';

const nav = [
    {
        name: '首页',
        path: '/',
        component: Home,
        exact: true,
        children: [],
    },
    {
        name: '中心',
        path: '/center',
        component: Center,
        children: [
            {
                name: '中心一',
                path: '/center/one',
                component: CtOne,
                exact: true,
                children: [],
            },
            {
                name: '中心二',
                path: '/center/two',
                component: CtTwo,
                children: [],
            },
        ],
    },
];

export default nav;
