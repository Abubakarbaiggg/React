import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddButtonClicked = (e) => {
    console.log(e);
    e.preventDefault();
    
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
