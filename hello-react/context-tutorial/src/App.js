import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import Test from "./components/Test"
function App() {
  return (
  <ColorProvider>
    <div>
      <ColorBox />
      <Test/>
    </div>
  </ColorProvider>
  )
}

export default App;
