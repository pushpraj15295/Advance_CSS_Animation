import "./App.css";
import CircleText from "./Pages/Image-design/CircleText";
import BackImageText from "./Pages/Text-design/BackImageText/BackImageText";
import BackVideoText from "./Pages/Text-design/BackVideoText/BackVideoText";
import GhostText from "./Pages/Text-design/ghostTexts/GhostText";


function App() {
  return (
    <div className="App">
      <BackVideoText/>
      
      <BackImageText />
      <GhostText />
      <CircleText />
    </div>
  );
}

export default App;
