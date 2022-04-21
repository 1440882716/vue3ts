import axios from "axios";
import { ElMessage } from "element-plus"


const $http = axios.create({
    // baseURL:"https://www.fastmock.site/mock/6f91d97b03fb82bfd2fd506d23172d85/test01",
    baseURL:"https://admin.cdzkzs.top",
    timeout:5000,
    headers:{
       'Content-Type':'application/json;charset=utf-8' 
    }
})
// 请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
       config.headers.Authorization = localStorage.getItem('token') || ''
    }
    return config
})
// 请求响应
$http.interceptors.response.use(res => {
    const code:number = res.data.code
    if(code != 200){
        ElMessage.error(res.data.msg) 
    }
    return res.data
},err=>{
    console.log(err);
    
})

export default $http


