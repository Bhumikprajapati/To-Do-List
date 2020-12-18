import { Component } from "react";
class Calcresult extends Component{
    render(){
        let {result}=this.props;
        return(
            <div className="result">
            {result}
        </div>
         )
    }
}
export default Calcresult;