import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <p
        onClick={e=>{
            props.deleteItem(props.index)
        }}>delete</p>
        </span>
    </li>
  )
}

export default Todolist