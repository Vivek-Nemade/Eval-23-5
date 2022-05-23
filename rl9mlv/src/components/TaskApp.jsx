import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import { v4 as uuid4 } from "uuid";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
// import Task from "./Task/Task";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = useState([]);

  const addTodo = (newtodo) => {
    console.log(todos);
    return setTodos([
      ...todos,
      {
        id: uuid4(),
        value: newtodo
      }
    ]);
  };

  const onDelete = (value) => {
    setTodos(todos.filter((todo) => todo.value !== value));
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask addTodo={addTodo} />
      <Tasks>onDelete={onDelete}</Tasks>
    </div>
  );
};

export default TaskApp;
