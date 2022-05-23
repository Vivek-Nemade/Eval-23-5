import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todos}) => {

  // sample values to be replaced
  // let [ totalTask,setTotalTask] = React.useState(todos.length);
  // let [unCompletedTask,setUnCompletedTask] = React.useState(0);
  let unCompletedTask=0
  let totalTask=0
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      Todo List
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
