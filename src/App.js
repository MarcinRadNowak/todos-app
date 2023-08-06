import React, {useState} from "react";
import { BsFillCalendar2PlusFill } from 'react-icons/bs';
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["abx", "dfg"]);
  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2f58ed] to-[#2f988a]">
      <div className="bg-slate-200 max-w-[600px] w-full m-auto rounded-sm shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 p-3">Todo application</h2>
        <form className="flex justify-between">
          <input className="border p-2 w-full text-lg" type="text" placeholder="Add an Todo" />
          <button className="border p-4 ml-2 bg-purple-700 text-slate-400"><BsFillCalendar2PlusFill size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className="text-center p-2">You have ... todos</p>
      </div>
    </div>
  );
}

export default App;
