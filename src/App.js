import "./App.css";
import { RecoilRoot } from "recoil";
import TodoListing from "./components/todos";
import AddTodos from "./components/addtodos";
import TodoStats from "./components/stats";

/**
 * This is the main component that is wrapped with RecoilRoot
 * it works like a universal provider for the recoil state management
 * @returns ReactNode
 */
function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoStats />
        <AddTodos />
        <TodoListing />
      </div>
    </RecoilRoot>
  );
}

export default App;
