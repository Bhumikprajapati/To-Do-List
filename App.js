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
        console.log(name)//taking value given
        name=task
        console.log(name)//updating value
        alltasks[index]=name//placing in main array
        this.setState({alltasks:alltasks,inputtoggle:false})
      }
     else{
      let len=alltasks.length;
      alltasks[len]=task
      console.log(alltasks);
      this.setState({alltasks:alltasks})
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
   let tasks=this.state.alltasks.map((data,index)=>{
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
       <input type="text" value={this.state.task} onChange={this.changeHandler} />
       <button type="button" onClick={this.addTaskhandler }>Add Task</button>
      {tasks}
    </div>
  );
}
    }
export default App;
