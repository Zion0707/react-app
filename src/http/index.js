import axios from 'axios';
import { message } from 'antd';

let api = 'http://localhost:3002/api';

export default {

    /**
     * ajax get 请求
     * 
     * opt:{
     *     url: api地址，
     *     params: 参数,
     *     callback: 返回值
     *     error: 错误信息
     * }
     * */  
    httpGet(opt){
        if(opt.url===undefined || opt.url===''){
            message.error('url是必须的！');
            return;
        }
        axios.get(`${api}${opt.url}`,{
            params: opt.params
        })
        .then((res)=>{
            var {data}=res;
            opt.callback && opt.callback(data);
        })
        .catch((err)=>{
            opt.error && opt.error(err);
        })
    },

    // ajax post 请求
    httpPost(opt){
        if(opt.url===undefined || opt.url===''){
            message.error('url是必须的！');
            return;
        }
        axios.post(`${api}${opt.url}`,{
            params: opt.params
        })
        .then((res)=>{
            var {data}=res;
            opt.callback && opt.callback(data);
        })
        .catch((err)=>{
            opt.error && opt.error(err);
        })
    }
    
}