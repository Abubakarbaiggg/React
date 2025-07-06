import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItem, setFoodItem] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItem, newFoodItem];
      setFoodItem(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="fw-bold food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage item={foodItem} />
        <FoodItems item={foodItem} />
      </Container>
    </>
  );
}
export default App;
