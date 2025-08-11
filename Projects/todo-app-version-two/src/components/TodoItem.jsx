function TodoItem({ todoName, todoDate }) {
    let todoName1 = todoName;
    let todoDate1 = todoDate;
    return (
        <div className="row">
            <div className="col-6">
                {todoName1}
            </div>
            <div className="col-4">
                {todoDate1}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger kg-button">Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;