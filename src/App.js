import React, {useState} from "react";
import { BsFillCalendar2PlusFill } from 'react-icons/bs';
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["abx", "dfg"]);
  return (
    <div>
      <div>
        <h2>Todo application</h2>
        <form>
          <input type="text" placeholder="Add an Todo" />
          <button ><BsFillCalendar2PlusFill size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
