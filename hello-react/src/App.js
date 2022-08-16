import React, { Component } from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ScrollBox from "./ScrollBox";
import ValidationSample from './ValidationSample';

function getRandomColor(){
  return `#` + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component{  
  state = {
    color : '#000000'
  }
  handleClick = () =>{
    this.setState({
      color : getRandomColor()
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>    
      // <IterationSample/>
      // <div>
      //   <ScrollBox ref={(ref)=>{this.ScrollBox=ref}}/>
      //   <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
      // </div>
      // <ValidationSample/>
    );
  }
}

export default App;

