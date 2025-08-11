function TudoItem2() {

    let todoName = "Go to Gym";
    let todoDate = "01/08/2025";
    return (
        <div class="row">
            <div class="col-6">
                {todoName}
            </div>
            <div class="col-4">
                {todoDate}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger kg-button">Delete</button>
            </div>
        </div>
    )
}
export default TudoItem2;