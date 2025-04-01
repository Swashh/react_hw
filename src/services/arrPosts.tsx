import {IPaginationPosts, IPost} from "../models/postModel.tsx";

const basePostsUrl = import.meta.env.VITE_API_BASE_URL + '/posts'

export const getPost = async (): Promise<IPost[]> => {
    const res: IPaginationPosts = await fetch(basePostsUrl)
        .then(response => response.json())
    return res.posts
}