import { AuthLoginRequestType } from '@/types/api-call/api-call.types';
import http from './http-common'
export class AuthService{

    login(data: AuthLoginRequestType){
        return http.post("/auth", data,{
            headers:{
                "Content-Type":"application/json"
            }
        });
    }
}