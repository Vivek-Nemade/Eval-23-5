import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [curcount, setCurCount]= React.useState(1);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setCurCount(Number(curcount)+1)}>+</button>
      <span data-cy="task-counter-value">{curcount}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>setCurCount(Number(curcount)-1)}>-</button>
    </div>
  );
};

export default Counter;
