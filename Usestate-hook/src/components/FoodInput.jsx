import styles from './FoodInput.module.css'
const FoodInput = ({ handleKeyDown }) => {
    return (
        <>
            <input
                type="text"
                className={styles.FoodInput}
                placeholder='Enter FoodItem here..'
                onKeyDown={(e) => {
                    handleKeyDown(e);
                }}
            >
            </input>
        </>
    )

}

export default FoodInput;