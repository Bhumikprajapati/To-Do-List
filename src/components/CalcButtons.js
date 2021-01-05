import React, { Component } from 'react';
class CalcButtons extends Component{
 
  render(){
let buttons=[];
    let {Clicked}=this.props;
    Clicked=(event)=>{
      this.props.Clicked(event.target.name)
    }
    let name=['(','CE',')','C','1','2','3','+','4','5','6','-','7','8','9','*','.','/','0','=','square','cube','sqrt'];
    let values=['(','CE',')','C','1','2','3','+','4','5','6','-','7','8','9','*','.','/','0','=','square','cube','sqrt']
for(let i in values){
  buttons.push(<button name={name[i]} onClick={Clicked}>{values[i]}</button>)
}
    return(
    <div className="buttons">  
  {buttons}
    </div>
)
}
}
export default CalcButtons;