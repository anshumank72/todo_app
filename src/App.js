import React from "react";
import "./resources/css/style.css";
import "simplebar-react/dist/simplebar.min.css";

//components
import Todo from "./component/todo";
import Header from "./component/header";

function App() {
  return (
    <div className="todo-app">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
