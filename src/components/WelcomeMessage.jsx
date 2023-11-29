import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { ToDoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
    const contextObject =  useContext(ToDoItemsContext);
    let toDoItems = contextObject.toDoItems;
    return (
        toDoItems.length === 0 && <>
            <p className={styles.welcome}>Nothing pending today!</p>
            <p className={styles.welcome}> Enjoy Your Day...</p>
        </>
    )
}

export default WelcomeMessage;