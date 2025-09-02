import react from 'react';
import Item from './Item';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodItems({ items }) {

    const handleBuyButtonClicked = (foodItem, e) => {
        console.log(e);
        console.log(`${foodItem} being bought`)
    }

    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item.id} foodItem={`${item.name} - Rs.${item.price}`}
                    handleBuyButton={handleBuyButtonClicked(foodItem, e)} />
            ))}
        </ul>
    );
}
export default FoodItems;