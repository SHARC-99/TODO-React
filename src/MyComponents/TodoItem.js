import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
            <h3 className="my-3">{todo.sno}</h3>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}
