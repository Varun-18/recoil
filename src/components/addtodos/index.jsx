import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../todos/store";

/**
 * Here I have used the state from another component that is the TodoListing
 * and this component will also be re-rendered when the state that is has subscribed to updates
 * hence , the complexity of redux is eliminated
 * @returns ReactNode
 */
const AddTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [input, setInput] = useState("");

  const onSubmit = () => {
    if (input.length > 0)
      setTodos([
        ...todos,
        { id: Math.random.toString(), task: input, isCompleted: false },
      ]);
  };
  return (
    <div>
      <input
        placeholder="add any task to your todo list..!!"
        onChange={(event) => setInput(event?.target?.value)}
      />
      <button type="submit" onClick={() => onSubmit()}>
        add todo
      </button>
    </div>
  );
};

export default AddTodos;
