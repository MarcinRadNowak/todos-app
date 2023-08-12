import React from "react";
import { VscTrash } from "react-icons/vsc";

const style = {
  li: "flex justify-between bg-slate-300 p-4 my-2 capitalize m-4",
  completedLi: "flex justify-between bg-slate-400 p-4 my-2 capitalize m-4",
  text: "ml-2 cursor-pointer",
  completedText: "ml-2 cursor-pointer line-through"
}
const Todo = ({todo, toggleStatus, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.completedLi : style.li}>
      <div className="flex">
        <input onChange={() => toggleStatus(todo)} type="checkbox" checked={todo.completed ? "checked" : ""} />
        <p onClick={() => toggleStatus(todo)} className={todo.completed ? style.completedText : style.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="cursor-pointer flex items-center">{<VscTrash size={30} />}</button>
    </li>
  )
}

export default Todo