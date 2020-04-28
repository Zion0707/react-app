import axios from 'axios';
import { message } from 'antd';

let api = 'http://localhost:3002/api';
export default {
    httpGet(opt){
        if(opt.url===undefined || opt.url===''){
            message.error('url是必须的！');
            return;
        }
        axios.get(`${api}${opt.url}`)
        .then((res)=>{
            var {data, status}=res;
            opt.callback && opt.callback(data);
        })
        .catch((err)=>{
            opt.error && opt.error(err);
        })
    }
}