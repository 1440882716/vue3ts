import $http from "./index";
interface loginData {
    userName:string
    password:string
    
}

export const login = (data:loginData) => $http({
   url:"/client/loginPwd",
   method:"GET",
   params:data
})

export const imgCode = () => $http({
    url:"/client/loginPwd",
    method:"GET",
 })

 export const goodsList = () => $http({
    url:"/client/paperInfo/paperPage",
    method:"GET",
 })