import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import './App.css';
import TodoItems from "./components/TodoItems";

function App() {
    const todoItems = [
        {
            name: "Buy Milk",
            dueDate : "4/12/2025"
        },
        {
            name: "Go To College",
            dueDate : "14/02/2022"
        },
        {
            name: "Go To Market",
            dueDate : "8/2/2005"
        },
    ];
    return <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
    </center >
}
export default App;