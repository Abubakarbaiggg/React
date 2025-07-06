import { useState } from "react";
import Item from "./Item";

const FoodItems = ({item}) => {
  let [activeItems,setActiveItems] = useState([]);
  let onBuyButton = (item,e) => {
    let newItems = [...activeItems,item]
    setActiveItems(newItems)
  } 
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyButton={(e) => onBuyButton(item,e)}/>
      ))}
    </ul>
  );
};
export default FoodItems;
