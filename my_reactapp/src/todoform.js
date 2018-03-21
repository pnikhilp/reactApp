const React = require('react');

export const TodoForm = ({addTodo}) => {
    let input;
    return (
        <div style={{marginBottom:20,width:500}}>
            <input style={{padding:5}} id="addtodo" className="" ref={ (node)=> {input = node}} type="text" />
            {" "}
            <button className="btn btn-success" onClick={()=>{addTodo(input.value);input.value=""}}>Add Todo</button>
            <br></br>
        </div>
    )
 }