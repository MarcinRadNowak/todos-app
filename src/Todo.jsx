import React from "react";
import { VscTrash } from "react-icons/vsc";

const style = {
  li: "flex justify-betwenn bg-slate-200 p-4 my-2 capitalize",
  completedLi: "flex justify-between bg-slate-400 p-4 my-2 capitalize",
  text: "ml-2 cursor-pinter",
  completedText: "ml-2 cursor-pointer line through"
}
const Todo = ({todo}) => {
  return (
    <li className={todo.completed ? style.completedLi : style.li}>
      <div className="flex">
        <input type="checkbox" checked={todo.completed ? "checked" : ""} />
        <p className={todo.completed ? style.completedText : style.text}>{todo.text}</p>
      </div>
      <button className="cursor-pointer flex items-center">{<VscTrash size={40} />}</button>
    </li>
  )
}

export default Todo