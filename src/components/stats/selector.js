import { selector } from "recoil";
import { todosState } from "../todos/store";

/**
 * This is a selector that takes in the existing state value and performs some computation and returns those values
 * it is usefull in the cases like below where we want to extract some kind of meta data
 * and the value given from the selector is immutable
 *
 * other thoughts : also can be usefull in the cases where we want to structure the data according to the UI
 */
export const todoStats = selector({
  key: "todo-statistics",
  get: ({ get }) => {
    // the get method is used to extract data from ohter states
    const todoList = get(todosState);

    const totalTasks = todoList.length;
    const pendingTasks = todoList.filter(
      (item) => item.isCompleted === false
    ).length;
    const completedTasks = totalTasks - pendingTasks;

    return {
      totalTasks,
      pendingTasks,
      completedTasks,
    };
  },
});
