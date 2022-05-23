import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ todos, onDelete }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {
          todos.map((todo) => (
          <Task key={todo.id} value={todo.value} onDelete={onDelete} />
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        Empty list Add a new task above
      </div>
    </>
  );
};

export default Tasks;
