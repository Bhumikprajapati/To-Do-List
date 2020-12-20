import React,{Component} from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
    state={
      task:'',
      index:'',
      alltasks:[ ],
      inputtoggle:false
    }
    changeHandler=(event)=>{
      this.setState({
        task:event.target.value,
      })
   }
    addTaskhandler=(event)=>{
      let task=this.state.task
      let index=this.state.index
      let alltasks=[...this.state.alltasks]
      if(this.state.inputtoggle){
        let name=alltasks[index]
        name=task
        alltasks[index]=name
        this.setState({alltasks:alltasks,inputtoggle:false})
      }
     else{
       if(task==="")
       {
         alert("Please enter some Task to do")
       }
       else{
        let len=alltasks.length;
        alltasks[len]=task
        this.setState({alltasks:alltasks})
      }
       }
     
  }
 editTaskHandler=(index)=>{
    let alltasks=[...this.state.alltasks]
    let task=alltasks[index];
    this.setState({
      task:task,
      index:index,
    inputtoggle:true})
   }
deleteTaskHandler=(index)=>{
  let alltasks=[...this.state.alltasks]
  alltasks.splice(index,1)
  this.setState({
    task:'',
    alltasks:alltasks,
  })
}

  render()
   {
    const {alltasks,task}=this.state;
   let tasks=alltasks.map((data,index)=>{
        return <TodoList
        editTask={this.editTaskHandler.bind(this,index)}
        deleteTask={this.deleteTaskHandler.bind(this,index)}
        value={data}
        key={index}
        />
      })
  
  return (
    <div className="App">
    
       <h1 className="title">To Do List</h1>
       <div className="inputs">
       <input type="text" value={task} onChange={this.changeHandler} />
       <button type="button" onClick={this.addTaskhandler }>Add Task</button>
       </div>
     {tasks}
     
      
    </div>
  );
}
    }
export default App;
