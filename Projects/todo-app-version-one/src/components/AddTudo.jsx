function AddTudo() {
    return (
        <div class="row">
            <div class="col-6">
                <input type="text" class="form-control" placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
                <input type="date" class="form-control" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-success kg-button">Add</button>
            </div>
        </div>
    )
}

export default AddTudo;