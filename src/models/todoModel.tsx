export interface IRootDataItem {
    userId: number;
    id: number;
    todo: string;
    completed: boolean;
};


export interface IPaginationTodos {
    todos: IRootDataItem[],
    total: number;
    skip: number;
    limit: number;
}