import styles from "./Item.module.css";
import '../App.css';

const Item = ({ foodItem, handleBuyButton }) => {

    return (
        <li className={`${styles.kgitem} ${styles.kgspan} list-group-item`}>

            <span className={`${styles.kgspan}`}>{foodItem}</span>
            <button onClick={(e) => handleBuyButton(foodItem, e)} className={`${styles.button} btn btn-info `}>
                Buy Now</button>

        </li >
    );
};

export default Item;