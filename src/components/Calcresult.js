import { Component } from "react";
class Calcresult extends Component{
    render(){
        let {result}=this.props;
        return(
            <div className="result">
            <p>{result}</p>
        </div>
         )
    }
}
export default Calcresult;