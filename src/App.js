import "./App.css";
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App m-5">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};
export default App;
