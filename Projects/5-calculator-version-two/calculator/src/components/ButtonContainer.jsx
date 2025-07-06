import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClicked}) => {
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
        {ButtonName.map((buttonText) => (
          <button key={buttonText} onClick={()=>onButtonClicked(buttonText)} className={`${styles.button}`}>
            {buttonText}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
