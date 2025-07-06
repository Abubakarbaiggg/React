import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if(buttonText === "C"){
      setCalVal("");
    }else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result)
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }
  }
  
  return (
    <>
      <div className={`${styles.calculator}`}>
        <Display displayValue={calVal} />
        <ButtonContainer
          onButtonClicked={onButtonClicked}
        />
      </div>
    </>
  );
}

export default App;
