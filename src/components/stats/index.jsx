import React from "react";
import { useRecoilValue } from "recoil";
import { todoStats } from "./selector";

/**
 * This component displays the statistics for the todos that are added
 * as the value given from the selectors is immutable we have used the useRecoilValue to get the value
 * as there is no chance of any mutation here
 * @returns ReactNode
 */
const TodoStats = () => {
  const stats = useRecoilValue(todoStats);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>Total : {stats.totalTasks}</div>
      <div>Completed : {stats.completedTasks}</div>
      <div>Pending : {stats.pendingTasks}</div>
    </div>
  );
};

export default TodoStats;
