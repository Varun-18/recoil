import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "./store";

/**
 * The component that is used to map the todolist
 * it uses the state mentioned in the store.js (not nescessary to give that name ,just for easy identification)
 * you can access the state and its setter method using the useRecoilState
 * if you just want to access the state then you can setup a unique selector or useRecoilValue hook
 * @returns ReactNode
 */
const TodoListing = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const changeStatus = (indexToUpdate) => {
    const newList = todos.map((item, index) => {
      if (index === indexToUpdate) {
        return {
          id: todos[index].id,
          task: todos[index].task,
          isCompleted: !todos[index].isCompleted,
        };
      } else {
        return item;
      }
    });
    setTodos(newList);
  };

  const deleteTask = (indexToDelete) => {
    const newList = todos.filter((item, index) => index !== indexToDelete);
    setTodos(newList);
  };

  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <span>{item.task}</span>
                <span
                  style={{ background: item.isCompleted ? "green" : "red" }}
                >
                  completed
                </span>
                <button onClick={() => changeStatus(index)}>
                  tap to change status
                </button>
                <button onClick={() => deleteTask(index)}>
                  tap to delete task
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListing;
