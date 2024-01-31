//QUOTES
export type GetAllQuotesParamsType = {
    pageIndex: number;
    count: number;
    startDate?: Date;
    endDate?: Date;
    search_query?: string
}

export type PostUpdateRequestType = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export type PostCreateRequestType={
    title:string;
    content:string;
}

export type BookmarkCreateRequestType={
    name:string;
    description:string;
    userProfileId:string;
}