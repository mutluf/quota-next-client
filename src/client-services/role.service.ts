import { RoleUpdateRequestType } from '@/types/api-call/api-call.types';
import http from './http-common'
export class RoleService{

    getRoles(){
        return http.get("/roles",{});
    }

    getRoleById(id:string){
        return http.get(`/roles/${id}`,{});
    }

    getUsersByRole(id:string){
        return http.get(`/roles/${id}/users`,{});
    }

    createRole(role:string){
        return http.post("/roles", role,{
            headers : { "Content-Type" : "application/json"}
        });
    }

    updateRole(data:RoleUpdateRequestType){
        return http.put("/roles",data,{});
    }

    addUsersToRole(id:string, userIds:string[]){
        return http.put(`/roles/${id}/users`, userIds,{});
    }

    deleteRoleById(id:string){
        return http.delete(`/roles/${id}`,{});
    }
}