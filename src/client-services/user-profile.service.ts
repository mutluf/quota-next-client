import { UserProfileUpdateRequestType } from '@/types/api-call/api-call.types';
import http from './http-common'
export class UserProfile{
    getAllUserProfiles(index: number, count:number){
        return http.get("/profiles",{
            params:{
                index:index,
                count:count
            }
        })
    }

    getUserProfileById(id:string){
        return http.get(`/profiles/${id}`,{});
    }

    getUserBookmarks(id:string){
        return http.get(`/profiles/${id}/bookmarks`,{})
    }

    getUserPosts(id:string, index:number, count:number){
        return http.get(`/profiles/${id}/posts`,{
            params:{
                index:index,
                count:count,
            }
        })
    }

    createUserProfile(id: string, data: UserProfileUpdateRequestType, file: File) {
        let formData = new FormData();
        formData.append("data", JSON.stringify(data)); // Assuming data is an object and needs to be sent as a string
        formData.append("file", file); // Append the file with the key "file"
        
        return http.post(`/profiles/${id}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

   updateUserProfile(id: string, data: UserProfileUpdateRequestType) {
    return http.put(`/profiles/${id}`, data);
   }
}