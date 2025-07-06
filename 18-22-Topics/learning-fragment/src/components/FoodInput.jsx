import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChanged }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.foodInput}
        onChange={handleOnChanged}
      />
    </>
  );
};
export default FoodInput;
