import React, {useState} from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import {v4 as uuid4} from 'uuid'
import Tasks from "./Tasks/Tasks";
const TaskApp = () => {
  const [todos, setTodos] = useState([])
  // NOTE: do not delete `data-cy` key value pair

  const addTodo=(newelem)=>{
    return(setTodos([...todos,{
      id:uuid4(),
      value:newelem
    }]))
  }


  const onDelete=((value)=>{
    setTodos(todos.filter((e)=>e.value!==value))
  })
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      {/* Header */}
      {/* Add Task */}
      <AddTask addTodo ={addTodo}/>
      <Tasks todos={todos} onDelete={onDelete}/>
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
