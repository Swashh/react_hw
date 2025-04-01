export interface IComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}


export interface IPaginationComments {
    comments: IComments[],
    total: number;
    skip: number;
    limit: number;
}