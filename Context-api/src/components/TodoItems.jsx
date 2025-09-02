import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


const TodoItems = () => {
    const { todoItems } = useContext(TodoItemsContext);
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
                <TodoItem
                    key={item.name}
                    todoDate={item.dueDate}
                    todoName={item.name}
                ></TodoItem>
            ))}
        </div>
    );
};

export default TodoItems;
