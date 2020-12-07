import React, {useState} from  "react";
import {useDisatch}from "react-redux";
import {addTask, filterTask}from "../js/Actions/index";
function Form () {
    const [myInput,setMyInput]=useState("");
    const dispatch =useDisatch ();
    const addTodo=(e)=>{
        const addTodo =(e)=>{
            e.preventDefault();
            if(myInput){
                dispatch(addTask({text:myInput,id:Math.random(),completed:false}));
            setMyInput("");

        }else 
        alert ("can't add an empty TODO !");

        }
    };
return (
    <form onSumbit ={addTodo}>
        <input 
        value={myInput}
        onChange={(e)=>setMyInput(e.target.value) }
        type="text"
        className="todo-input"
        />
        <button onClick={addTodo} className="todo-button" type="sumbit">
    <i className="fas fa-plus-square"></i>
    </button>

    </form>
);
}
export default Form;
export const Filter = ()=>{
    const dispatch = useDisatch();
    return (
        <div className="select">
            <select 
            name="todos"
            onChange={(e)=>dispatch(filterTask(e.target.value))}
            className="filter-todo">

            
        <option value="all "> All</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
</select>      
        </div>
    );
}



