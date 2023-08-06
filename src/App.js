import React, {useEffect, useState} from "react";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import Todo from "./Todo";
import { db } from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // CRUD
const createTodo = async (e) => {
  e.preventDefault(e);
  if(input === "") {
    alert("Please enter a task");
    return;
  }
  await addDoc(collection(db, "todos"), {
    text: input,
    completed: false
  })
}
useEffect(() => {
  const q = query(collection(db, "todos"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArray = [];
    querySnapshot.forEach((doc) => {
      todosArray.push({...doc.data(), id: doc.id});
    });
    setTodos(todosArray);
  })
  return () => unsubscribe();
}, [])

const toggleStatus = async (todo) => {
  await updateDoc(doc(db, "todos", todo.id), {
    completed: !todo.completed
  })
}

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2f58ed] to-[#2f988a]">
      <div className="bg-slate-200 max-w-[500px] w-full m-auto rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 p-4">Todo application</h2>
        <form onSubmit={createTodo} className="flex justify-between m-4">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="border p-2 w-full text-lg" 
            type="text" 
            placeholder="Add an Todo" 
          />
          <button className="border p-4 ml-2 bg-gray-100 text-slate-400"><BsFillCalendar2PlusFill size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleStatus={toggleStatus} />
          ))}
        </ul>
        <p className="text-center p-2">You have ... todos</p>
      </div>
    </div>
  );
}

export default App;
