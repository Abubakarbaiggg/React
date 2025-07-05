import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  // let foodItem = [];
  return (
    <>
      <Container>
        <h1 className="fw-bold food-heading">Healthy Food</h1>
        <ErrorMessage item={foodItem} />
        <FoodItems item={foodItem} />
      </Container>
      <Container><p>Abubakar Baig</p></Container>
    </>
  );
}
export default App;
