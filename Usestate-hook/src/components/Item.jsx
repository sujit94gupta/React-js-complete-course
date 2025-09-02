import styles from "./Item.module.css";
import '../App.css';
import { useState } from 'react';

const Item = ({ foodItem, handleBuyButton, bought }) => {

    console.log(bought);

    return (
        <li className={`${styles.kgitem} ${styles.kgspan} list-group-item ${bought && "active"}`}>

            <span className={`${styles.kgspan}`}>{foodItem}</span>
            <button onClick={(event) => handleBuyButton(foodItem, event)}
                className={`${styles.button} btn btn-info `}>
                Buy Now</button>

        </li >
    );
};

export default Item;