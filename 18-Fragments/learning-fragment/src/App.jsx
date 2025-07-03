import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  // let foodItem = [];
  return (
    <>
      <h1 className="fw-bold">Healthy Food</h1>
      <ErrorMessage item={foodItem}/>
      <FoodItems item={foodItem}/>
    </>
  );
}
export default App;
