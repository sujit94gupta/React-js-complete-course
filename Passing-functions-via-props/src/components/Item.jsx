import styles from "./Item.module.css";
import '../App.css';

const Item = ({ foodItem }) => {

    const handleBuyButtonClicked = (foodItem, e) => {
        console.log(e);
        console.log(`${foodItem} being bought`)
    }

    return (
        <li className={`${styles.kgitem} ${styles.kgspan} list-group-item`}>

            <span className={`${styles.kgspan}`}>{foodItem}</span>
            <button onClick={(e) => handleBuyButtonClicked(foodItem, e)} className={`${styles.button} btn btn-info `}>
                Buy Now</button>

        </li >
    );
};

export default Item;