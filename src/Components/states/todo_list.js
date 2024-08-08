import { Component } from "react";
import List from "../list";


class Todo extends Component{
    state={
        todos:["watch movie","watch indian movie"]

    };
    addTodoHndler=()=>{
        const newstate=[...this.state.todos,"watch movie"]
        this.setState({
            todos:newstate,
        });
    };
    render(){
        return(
       <>
       <h1>todo list</h1>

       <List list={this.state.todos}/>
       <button onClick={this.addTodoHndler}>click to add todos</button>
       <ol>
    {this.state.todos.map(each=>{
        return<li>{each}</li>
    })}
    </ol>
       </>
   ) }
}
export default Todo;


