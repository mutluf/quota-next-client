import http from "./http-common";
import { GetAllQuotesParamsType, PostCreateRequestType, PostUpdateRequestType } from "@/types/api-call/api-call.types";

class QuotesServices {

    getQuotes(filter:GetAllQuotesParamsType) {
        return http.get("/quotes", {
            headers: {
                // "Content-type": "application/json",
            },
            params: {
                filter: filter
            }
        });
    }

    getQuoteById(id: string) {
        return http.get(`/quotes/${id}`,
            {
            });
    }

    getQuotesByUserId(userId: string) {
        return http.get(`/quotes/GetQuotesByUserId/${userId}`,
            {
            });
    }

    postQuote(data: PostCreateRequestType) {
        return http.post("/quotes", data, {
        });
    }

    updateQuote(data: PostUpdateRequestType){
        return http.put("/quotes",data,{

        });
    }

    deleteQuote(id: string) {
        return http.delete(`/quotes/${id}`)
    }

}

export default new QuotesServices();