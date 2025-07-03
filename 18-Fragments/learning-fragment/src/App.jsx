import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItem = ["Dal", "Green Vegtable", "Roti", "Salad", "Milk"];
  // let foodItem = [];

  // if(foodItem.length === 0){
  //   return <h3>I am still hungry</h3>
  // }
  // let emptyMessage = foodItem.length === 0 ? <h3 className="lead">I am still hungry</h3> : null;
  return (
    <>
      <h1 className="fw-bold">Healthy Food</h1>
      {/* {emptyMessage } */}
      {/* {foodItem.length === 0 ? <h3>I am still hungry</h3> : null} */}
      {foodItem.length === 0 && <h3 className="lead">I am still hungry</h3>}
      <ul class="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item lead">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
