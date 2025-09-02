import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {

    const { deleteItem } = useContext(TodoItemsContext);

    return (
        <div className="container" style={{ padding: "10px; 10px;" }}>
            <div className="row kg-row" style={{ padding: "10px 0 0 0" }}>
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-danger kg-button"
                        onClick={() => deleteItem(todoName)}
                    >
                        <MdDelete />

                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
