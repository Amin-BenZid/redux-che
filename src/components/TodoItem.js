import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delTodo, uppdateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState(todo.name);
  return (
    <div>
      <div className=" m-4 mx-4 align-items-center" style={{ display: "flex" }}>
        <div>{todo.id}</div>
        <div className="col">
          {done ? (
            "Done"
          ) : <h4>{todo.name}</h4> && edit ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            dispatch(
              uppdateTodo({
                ...todo,
                name: name,
              })
            );
            if (edit) {
              setName(todo.name);
            }
            setEdit(!edit);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(delTodo(todo.id))}
        >
          Delete
        </button>
        <button className="btn btn-success mx-3" onClick={() => setDone(!done)}>
          Done
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
