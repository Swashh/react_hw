import {IPaginationTodos, IRootDataItem} from "../models/todoModel.tsx";

const todoUrl = import.meta.env.VITE_API_BASE_URL + '/todos'

export const getTodo = async (): Promise<IRootDataItem[]> => {

    const res: IPaginationTodos = await fetch(todoUrl)
        .then((value => value.json()))

    return res.todos

}
