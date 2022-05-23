import React,{useState} from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({value,onDelete}) => {
  const [isReady, setIsReady] = useState(value.isReady)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" className={styles.box} onChange={(e)=>{setIsReady(e.target.checked)}} data-cy="task-checkbox" />
      <div data-cy="task-text" className={isReady ? styles.decorate : styles.unChecked}>{value}</div>
      {/* Counter here */}
      <Counter/>
      <button onClick={()=>onDelete(value)} data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
