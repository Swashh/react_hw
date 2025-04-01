export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPaginationPosts {
    posts: IPost[]
    total: number;
    skip: number;
    limit: number;
}