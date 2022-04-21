import type { FormInstance } from "element-plus"
import {ref} from 'vue'
export interface loginFormInit {
    userName:string
    password:string
   
}
export class InitData {
    loginForm:loginFormInit = {
        userName:"abcdefg",
        password:"abcdefg",
        
    }
    loginFormRef = ref<FormInstance>()
}