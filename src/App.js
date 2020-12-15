import React,{ Component } from 'react';
import './App.css';
import CalcButtons from './components/CalcButtons';
import Calcresult from './components/Calcresult';
class App extends Component {
  state={
    result:''
  }
 Clicked=(button)=>{
    console.log(button)
    
    if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result + button
      })
  }
  }
  calculate=()=>{
    let Result="";
    if(this.state.result.includes('--')){
      Result = this.state.result.replace('--','+')
  }
 else {
      Result = this.state.result
  }
  try {
      this.setState({
        // eslint-disable-next-line
        result: eval(Result) 
      })
  } catch (error) {
      this.setState({
          result: "error"+error
      })

  }
  }
  reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

  
  render(){

  return (
    <div className="App">
   <Calcresult result={this.state.result}/>
   <CalcButtons Clicked={this.Clicked}/>
    </div>
  );
}
}

export default App;
