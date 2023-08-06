import React from "react";
import { BsFillCalendar2PlusFill } from 'react-icons/bs'

function App() {
  return (
    <div>
      <div>
        <h2>Todo application</h2>
        <form>
          <input type="text" placeholder="Add an Todo" />
          <button ><BsFillCalendar2PlusFill size={30} /></button>
        </form>
      </div>
    </div>
  );
}

export default App;
