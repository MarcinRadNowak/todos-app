import React from 'react';
import { VscTrash } from 'react-icons/vsc';

const Todo = ({todo}) => {
  return (
    <li>
      <div>
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <button>{<VscTrash size={40} />}</button>
    </li>
  )
}

export default Todo