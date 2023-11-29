import { createContext, useReducer } from "react";

export const ToDoItemsContext =createContext([])

const toDoItemsReducer = (currToDoItems, action) => {
    let newTodoItems = currToDoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currToDoItems, 
        {name: action.payload.itemName, dueDate: action.payload.itemDueDate}
      ]
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currToDoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    }
    return newTodoItems;
  }

const ToDoItemsContextProvider = ( {children} ) => {

    const [ todoItems, dispatchToDoItems ] = useReducer(toDoItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
        type: "NEW_ITEM",
        payload: {
        itemName,
        itemDueDate
        }
    }
    dispatchToDoItems(newItemAction);
    }

    const deleteItem = (toDoItemName) => {
    const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
        itemName: toDoItemName
        }
    }
    dispatchToDoItems(deleteItemAction);
    }

    return (
        <ToDoItemsContext.Provider value={{
            toDoItems: todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem
          }}>
            {children}
        </ToDoItemsContext.Provider>
    )
}

export default ToDoItemsContextProvider;