import styles from "./FoodInput.module.css";
const FoodInput = () => {
const handleOnChanged = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
      <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput} onChange={handleOnChanged} />
    </>
  );
};
export default FoodInput;
