import { BookmarkCreateRequestType } from "@/types/api-call/api-call.types";
import http from "./http-common";

class BookmarkService{
    getBookmarks(index:number, count:number){
        return http.get("/bookmarks",{
            headers:{},
            params:{
                index:index,
                count:count
            }
        })
    }

    getBookmarkById(id:string){
        return http.get(`/bookmarks/${id}`,{
        })
    }

    createBookmark(data:BookmarkCreateRequestType){
        return http.post("/bookmarks", data,{
            headers: { "Content-Type": "application/json" },

        })
    }

    updateBookmark(id:string, postIds:string[]){
        return http.put(`/bookmarks/${id}/posts`,postIds,{

        });
    }

    deleteBookmark(id:string){
        return http.delete(`/bookmarks/${id}`);
    }


}