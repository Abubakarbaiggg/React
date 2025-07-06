import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  // let foodItem = [];
  let textToShow = "Food Item Entered By User"
  const handleOnChanged = (e) => {
    console.log(e.target.value);
    textToShow = e.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="fw-bold food-heading">Healthy Food</h1>
        <ErrorMessage item={foodItem} />
        <FoodInput handleOnChanged={handleOnChanged} />
        <p>{textToShow}</p>
        <FoodItems item={foodItem} />
      </Container>
    </>
  );
}
export default App;
