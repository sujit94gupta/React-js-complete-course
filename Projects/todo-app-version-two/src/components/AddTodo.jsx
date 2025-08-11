function AddTodo() {
    return (
        <div className="row">
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
                <input type="date" className="form-control" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button">Add</button>
            </div>
        </div>
    )
}

export default AddTodo;