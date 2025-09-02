
const ErrorMessage = ({ items }) => {
    if (items.length === 0) {
        return <div className="alert alert-danger">No food items available</div>;
    }
    return null;
}

export default ErrorMessage;