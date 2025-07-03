import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
