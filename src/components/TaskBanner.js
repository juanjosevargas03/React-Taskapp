import React from "react";

export const TaskBanner = (props) => (
  <h4 className="bg-dark text-white p-4">
    {props.userName} Task App ( {props.taskItems.filter((t) => !t.done).length}{" "}
    tasks to do )
  </h4>
);
