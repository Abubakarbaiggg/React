import Item from "./Item";

const FoodItems = ({item}) => {

  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} foodItem={item}/>
      ))}
    </ul>
  );
};
export default FoodItems;
