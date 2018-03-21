const React = require('react');

function Todo({todo,delTodo,saveTodo}){
    
    let input,edit,update;
  
      return(

          <li className="list-group-item">
 
           <input type="text" className="form-control" readOnly="true" /*value={todo.text}*/ placeholder={todo.text} 
              ref={ (node)=> {input = node}} /*onChange={(e)=>{this.onChange(e.target.value)} onChange.bind(this) */ /> {' '}    

           <button className="btn btn-danger" onClick={()=>{delTodo(todo.id)}}>
           <i className="fa fa-trash"></i>
           </button> {' '}

           <button className="btn btn-primary" ref={(node)=>{ edit=node }} onClick={()=>{ update.hidden=false
          input.readOnly=false }}><i className="fa fa-pencil-square" aria-hidden="true"></i> 
          </button> {' '}

           <button  className="btn btn-success" hidden = "true" ref={ (node)=> {update = node}} onClick={()=>
               {saveTodo(todo.id,input.value);input.readOnly=true;input.placeholder=input.value;
               input.value=input.value;update.hidden=true}}> Save </button> {' '}

          {/* Completed<input type="checkbox" class="form-check-input" />  */}

          </li>

      )
  }

 export function TodoList({data,delTodo,saveTodo}){
    
    let todo = data.map(item=>{

        return(<Todo key={item.id} todo={item} delTodo={delTodo} saveTodo={saveTodo}/>)  
       
    })
    
    return(
        <ul className="list-group">
            {todo}
        </ul>
      )
    }