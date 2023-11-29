import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ToDoItemsContext } from "../store/todo-items-store";

function ToDoItem({toDoName, toDoDate}) {

    const { deleteItem } = useContext(ToDoItemsContext);

    return (
        <div className="row mt-3">
            <div className="col-md-6"> {toDoName} </div>
            <div className="col-md-4"> {toDoDate} </div>
            <div className="col-md-2">
                    <button onClick={() => deleteItem(toDoName)} className="btn btn-danger btn-width"> <MdDelete />
 </button>
            </div>
        </div>
    )
}
export default ToDoItem;