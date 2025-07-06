import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  // let foodItem = [];
  return (
    <>
      <Container>
        <h1 className="fw-bold food-heading">Healthy Food</h1>
        <ErrorMessage item={foodItem} />
        <FoodInput />
        <FoodItems item={foodItem} />
      </Container>
    </>
  );
}
export default App;
