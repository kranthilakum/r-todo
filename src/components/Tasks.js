import { useState } from "react";
const Tasks = ({ todos, setTodos }) => {
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
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
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
                onClick={() => {
                  markComplete(todo.id);
                }}
              />
              {isEdit ? (
                <input
                  type="text"
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
                    bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
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
                    todo.completed ? "line-through" : ""
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
  );
};
export default Tasks;
