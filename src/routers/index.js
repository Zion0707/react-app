import Home from '../views/Home';

import News from '../views/News';
import NewsOne from '../views/News/One';
import NewsTwo from '../views/News/Two';
import NewsThree from '../views/News/Three';
import NewsFour from '../views/News/Four';
import NewsFive from '../views/News/Five';

import Test from '../views/Test';
import Nav from '../views/Nav';
import NavOne from '../views/Nav/One';
import NavTwo from '../views/Nav/Two';
import NavThree from '../views/Nav/Three';

let routers = [
    {
        path:'/',
        name:'首页',
        icon:'home',
        component: Home,
        exact:true,
    },
    {
        path:'/news',
        name:'电能',
        icon:'dn-icon',
        component: News,
        child:[
            {
                path:'/news',
                name:'栏目一',
                component: NewsOne,
                exact: true
            },
            {
                path:'/news/two',
                name:'栏目二',
                component: NewsTwo
            },
            {
                path:'/news/three',
                name:'栏目三',
                component: NewsThree
            },
            {
                path:'/news/four',
                name:'栏目四',
                component: NewsFour
            },
            {
                path:'/news/five',
                name:'栏目五',
                component: NewsFive
            },
        ]
    },
    {
        path:'/test',
        name:'测试',
        icon:'cs-icon',
        component: Test,
    },
    {
        path:'/nav',
        name:'导航',
        icon:'dh-icon',
        component: Nav,
        child:[
            {
                path:'/nav',
                name:'栏目一',
                icon:'yi-icon',
                component: NavOne,
                exact: true
            },
            {
                path:'/nav/two',
                name:'栏目二',
                icon:'er-icon',
                child:[
                    {
                        path:'/nav/two/one',
                        name:'栏目二-1',
                        icon:'yi-icon',
                        component: NavTwo,
                        exact: true,
                    },
                    {
                        path:'/nav/two/two',
                        name:'栏目二-2',
                        icon:'yi-icon',
                        component: NavTwo,
                    },
                ]
            },
            {
                path:'/nav/four',
                name:'栏目四',
                icon:'er-icon',
                child:[
                    {
                        path:'/nav/four/one',
                        name:'栏目四-1',
                        icon:'yi-icon',
                        component: NavTwo,
                        exact: true
                    },
                    {
                        path:'/nav/four/two',
                        name:'栏目四-2',
                        icon:'yi-icon',
                        component: NavTwo,
                    },
                ]
            },
            {
                path:'/nav/three',
                name:'栏目三',
                icon:'san-icon',
                component: NavThree
            },
        ]
    },
];

export default routers;