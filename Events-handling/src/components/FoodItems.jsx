import react from 'react';
import Item from './Item';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodItems({ items }) {

    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item.id} foodItem={`${item.name} - Rs.${item.price}`} />
            ))}
        </ul>
    );
}
export default FoodItems;