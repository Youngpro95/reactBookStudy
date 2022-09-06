import React, {Component} from 'react'
import { render } from 'react-dom';
import StyledComponent from './StyledComponent';
import CSSModule from './CSSModule';
import SassComponent from './SassComponent';

import styled from 'styled-components';

const Circle = styled.div`
width : 5rem;
height : 5rem;
background : ${props=>props.color||'black'};
border-radius : 50%;
`;

class App extends Component {
  render() {
    return (
      <div>
        {/* <Circle color="blue"/> */}
        {/* <SassComponent/> */}
        {/* <CSSModule/> */}
        {/* <StyledComponent/> */}
      </div>
    );
  };
}

export default App;
