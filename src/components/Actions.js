const Actions = ({ todos, setTodos, numberOfTasks }) => {
  const showAllTasks = () => {
    setTodos(todos);
  };
  const showCompletedTasks = () => {
    setTodos(todos.filter((todo) => todo.completed));
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <>
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
              Archive
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Actions;
