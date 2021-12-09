import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

function TodoInput() {
  const dispatch = useDispatch();
  let [name, setName] = useState();
  return (
    <div>
      <div className="  m-2">
        <input
          type="text"
          className=" col from-controm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-primary m-2 "
          onClick={() => {
            dispatch(
              addTodo({
                id: uuidv4().charAt(0),
                name: name,
              })
            );
            setName("");
          }}
        >
          ADD!
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
