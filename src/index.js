import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/app';
import * as serviceWorker from './serviceWorker';
import '@/static/js/rem.js';
import 'antd-mobile/dist/antd-mobile.css';
import '@/static/less/app.less';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
