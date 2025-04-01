import {useEffect, useState} from "react";
import {getTodo} from "../../services/arrTodo.tsx";
import Todo from "../todoComponent/todo.tsx";
import {IRootDataItem} from "../../models/todoModel.tsx";

const Todos = () => {
    const [todos, setTodos] = useState<IRootDataItem[]>([])
    useEffect(() => {
        getTodo()
            .then(response => {
                setTodos(response)
            })
    }, []);


    return (
        <div>
            {

                todos.map((value) => <Todo key={value.id} itemTodo={value}/>)
            }
        </div>
    );
};

export default Todos;