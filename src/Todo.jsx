import React from "react";
import { VscTrash } from "react-icons/vsc";

const Todo = ({todo}) => {
  return (
    <li className="flex justify-between bg-slate-400 p-4 my-2 capitalize">
      <div className="flex">
        <input type="checkbox" />
        <p className="ml-2 cursor-pointer">{todo}</p>
      </div>
      <button className="cursor-pointer flex items-center">{<VscTrash size={40} />}</button>
    </li>
  )
}

export default Todo