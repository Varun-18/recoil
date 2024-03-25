import { atom } from "recoil";

/**
 * atom is the basis building block of the recoil
 * it just contains the state that you want to share across the app
 * to use the state in other place you just need to export it
 * you can pass the default value that you want to show 
 * the key must be unique for all the selectors and the atoms as it is used by recoil to uniquely identify the state
 */
export const todosState = atom({
  key: "todos-container",
  default: [
    {
      id: "abcd1234",
      task: "complete the demo of recoil",
      isCompleted: false,
    },
  ],
});
