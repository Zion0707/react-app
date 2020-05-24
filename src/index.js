import React from 'react';
import ReactDOM from 'react-dom';
import store from '@/stores';
import App from '@/pages/app';
import 'antd/dist/antd.css';
import '@/static/less/index.less';

function renderPage() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage);
