import { UserCreateRequestType, UserUpdateRequestType } from "@/types/api-call/api-call.types";
import http from "./http-common";

class UserService{


    getAllUsers(index: string, count:number){
        return http.get("/users",{
            params:{
                index :index,
                count :count
            }
        })
    }

    getUserById(id:string){
        http.get(`/users/${id}`,{})
    }

    getUserRoles(id:string, index:number, count:number){
        return http.get(`/users/${id}/roles`,{
            params:{
                index :index,
                count :count
            }
        })
    }

    createUser(data:UserCreateRequestType){
        return http.post("/users",data,{
            headers:{
                "Content-type":"Application/json"
            }
        })
    }

    updateUsers(id:string, data:UserUpdateRequestType[]){
        return http.put(`/users/${id}/roles`,data,{
            headers:{"Content-type":"Application/json"}
        })
    }

    updateUser(id:string, data:UserUpdateRequestType){
        return http.put(`/users/${id}/roles`,data,{
            headers:{"Content-type":"Application/json"}
        })
    }

    deleteUser(id:string){
        return http.delete(`/users/${id}`);
    }
}