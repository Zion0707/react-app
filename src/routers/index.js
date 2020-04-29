import Home from '../views/Home';
import News from '../views/News';
import One from '../views/News/One';
import Two from '../views/News/Two';
import Three from '../views/News/Three';
import Four from '../views/News/Four';
let routers = [
    {
        path:'/',
        name:'首页',
        component: Home,
        exact:true,
    },
    {
        path:'/news',
        name:'电能',
        component: News,
        routers:[
            {
                path:'/news',
                name:'栏目一',
                component: One,
                exact: true
            },
            {
                path:'/news/two',
                name:'栏目二',
                component: Two
            },
            {
                path:'/news/three',
                name:'栏目三',
                component: Three
            },
            {
                path:'/news/four',
                name:'栏目四',
                component: Four
            },
        ]
    }
];

export default routers;