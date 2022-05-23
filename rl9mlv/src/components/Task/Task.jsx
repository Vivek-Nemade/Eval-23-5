import React from "react";
import styles from "./task.module.css";

const Task = ({ value, onDelete }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{value}</div>
      <button data-cy="task-remove-button" onClick={onDelete(value)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
