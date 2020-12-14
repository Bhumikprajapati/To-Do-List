import React from 'react';
import classes from './TodoList.module.css'
const TodoList=(props)=>{
    return(
             <div >
              <h2 className={classes.outstyle}>
              <input type="checkbox" />
               {props.value}
              <button onClick={props.editTask} className={classes.edit}>Edit</button>
              <button onClick={props.deleteTask} className={classes.delete}>Delete</button>
             </h2>
        </div>
)

}
export default TodoList;