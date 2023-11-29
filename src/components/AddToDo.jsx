import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { ToDoItemsContext } from "../store/todo-items-store";

function AddToDo() {

    const { addNewItem } = useContext(ToDoItemsContext);

    const toDoNameElement = useRef("");
    const dueDateElement = useRef("");

    const handleAddButtonClicked = () => {
        const toDoName = toDoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        addNewItem(toDoName,dueDate);

        toDoNameElement.current.value = "";
        dueDateElement.current.value = "";
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <input 
                    type="text" 
                    ref = {toDoNameElement}
                    className="form-control" 
                    placeholder="Enter your To-do list item to add.."
                />
            </div>

            <div className="col-md-4">
                <input 
                    ref={dueDateElement}
                    className="form-control" 
                    type="date" 
                />
            </div>

            <div className="col-md-2">
                <button className="btn btn-success btn-width" onClick={handleAddButtonClicked}> <IoMdAdd /> </button>
            </div>
        </div>
    )
}

export default AddToDo;