import {IComments, IPaginationComments} from "../models/commentsModel.tsx";

const baseCommentsUrl = import.meta.env.VITE_API_BASE_URL + '/comments'

export const getComments = async (): Promise<IComments[]> => {
    const res: IPaginationComments = await fetch(baseCommentsUrl)
        .then(response => response.json())
    return res.comments
}