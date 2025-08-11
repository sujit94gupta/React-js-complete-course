import styles from './FoodInput.module.css'
const FoodInput = () => {
    return (
        <>
            <input
                type="text"
                className={styles.FoodInput}
                placeholder='Enter FoodItem here..'
                onChange={(e) => {
                    console.log(e.target)
                }}
            >
            </input>
        </>
    )

}

export default FoodInput;