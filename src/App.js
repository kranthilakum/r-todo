import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const editTodo = (id, text) => {
    setIsEdit(true);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      })
    );
  };
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
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    setCompleted(!completed);
  };
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const showAllTasks = () => {
    setCompleted(false);
  };
  const showCompletedTasks = () => {
    setCompleted(true);
  };
  const countTasksToComplete =
    todos && todos.filter((todo) => !todo.completed).length;
  const numberOfTasks = todos && todos.length;

  return (
    <div className="App">
      <header className="App-header bg-amber-50">
        <h1 className="font-sans font-light text-5xl text-amber-600">to-do</h1>
        <div className="flex items-center text-xs text-amber-600">
          <span>{`${countTasksToComplete} ${
            numberOfTasks === 1 ? "task" : "tasks"
          } to complete`}</span>
        </div>
      </header>
      <div className="flex justify-center">
        <div className="block rounded-b-lg shadow-lg bg-white max-w-lg">
          <div id="input-group">
            <input
              type="text"
              className="
            block
            w-full
            px-3
            py-1.5
            h-16
            text-xl
            font-normal
            text-amber-500
            bg-white bg-clip-padding
            transition
            ease-in-out
            m-0
            border-b border-gray-200
            focus:text-amber-600 focus:bg-white focus:border-amber-600 focus:outline-none
          "
              id="exampleFormControlInput1"
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
            <ul className="bg-white w-96 text-gray-900">
              {todos &&
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex justify-between px-3 py-2 border-b border-amber-200 rounded-t-lg text-gray-500"
                  >
                    <span className="flex justify-start">
                      <input
                        className="border border-amber-200 rounded-sm p-1 mr-3"
                        type="checkbox"
                        onClick={() => markComplete(todo.id)}
                      />
                      {isEdit ? (
                        <input
                          type="text"
                          className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              editTodo(todo.id, e.target.value);
                              e.target.value = "";
                              setIsEdit(false);
                            } else {
                              return;
                            }
                          }}
                          defaultValue={todo.text}
                        />
                      ) : (
                        <span
                          className={`${
                            completed ? "line-through" : ""
                          } text-amber-600`}
                          onDoubleClick={() => setIsEdit(true)}
                        >
                          {todo.text}
                        </span>
                      )}
                    </span>
                    <button
                      className="text-gray-500 hover:text-gray-700 border border-amber-200 rounded-sm px-2"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      x
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          {numberOfTasks > 0 && (
            <div className="flex justify-between text-xs m-3 text-gray-500">
              <div className="flex items-center">
                <button
                  className="border border-amber-200 rounded-sm p-1"
                  onClick={showAllTasks}
                >
                  All
                </button>
              </div>
              <div className="flex items-center">
                <button className="border border-amber-200 rounded-sm p-1">
                  Active
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="border border-amber-200 rounded-sm p-1"
                  onClick={showCompletedTasks}
                >
                  Completed
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="border border-amber-200 rounded-sm p-1"
                  type="button"
                  onClick={() => clearCompleted()}
                >
                  Clear completed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
