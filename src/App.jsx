import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import ToDoItemsContextProvider from "./store/todo-items-store";


function App() {

  return <center className="to-do-container">
    <ToDoItemsContextProvider>
      <div className="container-fluid mb-4">
        <AppName />
        <AddToDo />
        <WelcomeMessage />
        <ToDoItems />
      </div>
    </ToDoItemsContextProvider>
    
  </center>
  
}

export default App;