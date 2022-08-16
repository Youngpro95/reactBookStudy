import Counter from "./Counter";
import Info from "./info";
import React, { useState } from "react";
import Average from "./Average";

const App = () => {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // return <Counter/>
  // return <Info/>;
  return <Average/>
};

export default App;
