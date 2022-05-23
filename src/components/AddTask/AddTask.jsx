import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTodo}) => {

  const[value,setValue]=useState("")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" onChange={(e)=>{setValue(e.target.value)}} />
      <button onClick={()=>{addTodo(value); setValue("")}} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
