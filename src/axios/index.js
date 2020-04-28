import axios from 'axios';

export default {
    httpGet(){
        axios.get('http://localhost:3002/api/light/list')
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
}