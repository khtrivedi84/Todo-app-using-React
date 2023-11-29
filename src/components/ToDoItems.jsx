import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./ToDoItem";

const ToDoItems = () => {

    const { toDoItems }=  useContext(ToDoItemsContext);
    return <>
        {toDoItems.map(item => 
            <ToDoItem 
                key={item.name} 
                toDoName={item.name} 
                toDoDate={item.dueDate}
            ></ToDoItem>
        )}
        </>
}
export default ToDoItems;