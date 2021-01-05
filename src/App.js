import React,{ Component } from 'react';
import './App.css';
import CalcButtons from './components/CalcButtons';
import Calcresult from './components/Calcresult';
class App extends Component {

  state={
    result:''
  }
 Clicked=(button)=>{
    if(button === "="){
      this.calculate()
  }
    else if(button === "C"){
      this.reset()
  }
   else if(button === "CE"){
      this.backspace()
  }
  else if(button === "square"){
    let s=this.state.result;
    let Result=Math.pow(s,2)
    this.setState({result:Result})
}

else if(button === "cube"){
  let c=this.state.result;
    let Result=Math.pow(c,3)
    this.setState({result:Result})
}
else if(button === "sqrt"){
  let s=this.state.result;
    let Result=Math.sqrt(s)
    this.setState({result:Result})
}

  else {
      this.setState({
          result: this.state.result + button
      })
  }
  }
  calculate=()=>{
    let Result="";
   
      Result = this.state.result
    
  try {
      this.setState({
      // eslint-disable-next-line
        result:(eval(Result) || "" ) + ""
      })
  } catch (error) {
      this.setState({
          result: `error ${error}`
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
    const {result}=this.state;
  return (
    <div className="App">
   <Calcresult result={result}/>
   <CalcButtons Clicked={this.Clicked}/>
    </div>
  );
}
}

export default App;
