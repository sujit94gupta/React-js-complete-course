import react from 'react';
function FoodItems({ item }) {
    return (
        <div className="food-items">
            {item.map((food) => (
                <div key={food.id} className="food-item">
                    <h3>{food.name}</h3>
                    <p>Price: ${food.price}</p>
                </div>
            ))}
        </div>
    );
}
export default FoodItems;