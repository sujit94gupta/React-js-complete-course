import styles from './FoodInput.module.css'
const FoodInput = ({ handleOnChange }) => {
    return (
        <>
            <input
                type="text"
                className={styles.FoodInput}
                placeholder='Enter FoodItem here..'
                onChange={(e) => {
                    handleOnChange(e);
                }}
            >
            </input>
        </>
    )

}

export default FoodInput;