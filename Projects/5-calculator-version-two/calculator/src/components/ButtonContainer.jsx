import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  let ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={`${styles.buttonContainer}`}>
        {ButtonName.map((item) => (
          <button key={item} className={`${styles.button}`}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
