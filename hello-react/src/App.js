import React, { Component } from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ScrollBox from "./ScrollBox";
import ValidationSample from './ValidationSample';

class App extends Component{
  render(){
    return(
      <LifeCycleSample/>
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
