import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Tasks from "./components/Tasks";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    if (text) {
      const newTodo = {
        id: uuidv4(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };
  const countTasksToComplete =
    todos && todos.filter((todo) => !todo.completed).length;

  return (
    <div className="App">
      <Header
        numberOfTasks={todos && todos.length}
        tasksToComplete={countTasksToComplete}
      ></Header>
      <div className="flex justify-center">
        <div className="block rounded-b-lg shadow-lg bg-white max-w-lg">
          <div id="input-group">
            <input
              type="text"
              className="block w-full px-3 py-1.5 h-16 text-xl font-normal 
              text-amber-500 bg-white bg-clip-padding transition ease-in-out m-0 border-b border-amber-200 
              focus:text-amber-600 focus:bg-white focus:border-amber-600 focus:outline-none"
              id="input-todo"
              placeholder="Add a task"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addTodo(e.target.value);
                  e.target.value = "";
                } else {
                  return;
                }
              }}
            />
          </div>
          <div className="flex justify-center">
            <Tasks todos={todos} setTodos={setTodos}></Tasks>
          </div>
          <Actions
            todos={todos}
            setTodos={setTodos}
            numberOfTasks={todos && todos.length}
          ></Actions>
        </div>
      </div>
    </div>
  );
}

export default App;
