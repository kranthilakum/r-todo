const Header = ({ numberOfTasks, tasksToComplete }) => {
  return (
    <header className="App-header bg-amber-50">
      <h1 className="font-sans font-light text-5xl text-amber-600">to-do</h1>
      <div className="flex items-center text-xs text-amber-600">
        <span>{`${tasksToComplete} ${
          numberOfTasks === 1 ? "task" : "tasks"
        } to complete`}</span>
      </div>
    </header>
  );
};
export default Header;
