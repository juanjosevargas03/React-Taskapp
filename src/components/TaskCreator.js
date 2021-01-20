import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setnewTaskName] = useState("");

  const updateNewTaskValue = (e) => setnewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);

    setnewTaskName("");
  };

  return (
    <div className="my-3 ">
      <table className="table">
        <tbody>
          <tr>
            <td className="col-8">
              <input
                placeholder="New Task"
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
              />
            </td>
            <td>
              <button className="btn btn-primary " onClick={createNewTask}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
