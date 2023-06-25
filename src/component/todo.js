//Parent component of todo app
import React, { useState } from "react";
import TodoCard from "./todoCard";
import SimpleBar from "simplebar-react";
import empty from "../resources/images/empty-icon.png";

const Todo = () => {
  //states
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    value: "",
    key: new Date(),
  });

  console.log("todos", todos, todo);
  //function to handle input
  const handleInput = (event) => {
    const { value } = event.target;
    setTodo({ ...todo, value });
  };

  //funtion to handle to add button
  const handleSubmit = () => {
    setTodos([...todos, todo]);
    setTodo({
      value: "",
      key: new Date(),
    });
  };

  //function to handle delete
  const handleDelete = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <div className="todo-container mt-4">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="td-top">
            <div className="input-container position-relative">
              <input
                className="w-100"
                placeholder="Add Todo Here..."
                value={todo.value}
                onChange={handleInput}
              />
              <div
                className="add-icon d-flex justify-content-center align-items-center cursor-pointer"
                onClick={handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
          <SimpleBar className="td-bottom mt-3">
            <div className="td-bottom-header mb-3">
              <h4>Todo's</h4>
            </div>
            {todos && todos.length > 0 ? (
              todos.map((item) => (
                <TodoCard
                  item={item}
                  key={item.key}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <div className="empty-container mt-5 d-flex flex-column justify-content-center align-items-center">
                <div className="empty-img mb-3">
                  <img src={empty} alt="empty-icon" />
                </div>
                <h5>No todo's added yet.</h5>
              </div>
            )}
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default Todo;
