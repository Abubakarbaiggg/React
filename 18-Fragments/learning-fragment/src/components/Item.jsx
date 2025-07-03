const Item = ({foodItem}) => {
  return (
    <li key={foodItem} className="list-group-item lead">
      {foodItem}
    </li>   
  );
};
export default Item;
