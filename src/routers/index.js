import Home from '../views/Home';
import News from '../views/News';
import One from '../views/News/One';
import Two from '../views/News/Two';
let routers = [
    {
        path:'/',
        name:'首页',
        component: Home,
        exact:true,
    },
    {
        path:'/news',
        name:'新闻',
        component: News,
        routers:[
            {
                path:'/news/',
                name:'栏目一',
                component: One,
                exact: true
            },
            {
                path:'/news/two',
                name:'栏目二',
                component: Two
            },
        ]
    }
];

export default routers;