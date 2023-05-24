import axios from "axios";
import {message} from 'antd'
export default function ajax(url,headers,data = {},method = 'GET') {
    return new Promise(function(resolve,reject){
        let promise 
        if(method==='GET'){
            promise = axios.get(url,{
                params:data,
                headers
            })
        }else{
            console.log('发送了请求',url,data,headers);
            promise = axios.post(url,data,{headers})
        }
        promise.then(response =>{
            resolve(response.data)
        }).catch(error=>{
            message.error('请求错误'+error.message)
        })
    })
}