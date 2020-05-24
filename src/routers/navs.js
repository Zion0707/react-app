// import React from 'react';
// import Loadable from 'react-loadable';

import Home from '@/pages/Home';
import Center from '@/pages/Center';
import CtOne from '@/pages/Center/ct-one';
import CtTwo from '@/pages/Center/ct-two';

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
