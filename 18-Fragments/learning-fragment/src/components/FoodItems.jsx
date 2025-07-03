import Item from "./Item";

const FoodItems = ({item}) => {

  return (
    <ul class="list-group">
      {item.map((item) => (
        <Item foodItem={item}/>
      ))}
    </ul>
  );
};
export default FoodItems;
