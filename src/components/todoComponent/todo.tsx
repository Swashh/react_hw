import {FC} from "react";
import {IRootDataItem} from "../../models/todoModel.tsx";

type TodoPropType = {
    itemTodo: IRootDataItem
}

const Todo: FC<TodoPropType> = ({itemTodo}) => {
    return (
        <div>
            <div>Айді - {itemTodo.id}</div>
            <div>Назва - {itemTodo.todo}</div>
            <div>Айді користувача - {itemTodo.userId}</div>
            <div>TEST - {itemTodo.completed.toString()}</div>
        </div>

    );
};

export default Todo;