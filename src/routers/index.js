import Home from '../views/Home';
import News from '../views/News';
import One from '../views/News/One';
import Two from '../views/News/Two';
let routers = [
    {
        path:'/',
        component: Home,
        exact:true,
    },
    {
        path:'/news',
        component: News,
        routers:[
            {
                path:'/news/',
                component: One,
                exact: true
            },
            {
                path:'/news/two',
                component: Two
            },
        ]
    }
];

export default routers;