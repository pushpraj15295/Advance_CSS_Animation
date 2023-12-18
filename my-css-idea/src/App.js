import "./App.css";
import CircleText from "./Pages/Image-design/CircleText";
import GhostText from "./Pages/Text-design/ghostTexts/GhostText";
import BackImageText from "./Pages/Text-design/BackImageText/BackImageText";
import BackVideoText from "./Pages/Text-design/BackVideoText/BackVideoText";
import CyclingGradient from "./Pages/Image-design/CyclingGradient/CyclingGradient";

function App() {
  return (
    <div className="App">
      <GhostText />
      <BackImageText />
      <BackVideoText />
      <CircleText />
      <CyclingGradient />
    </div>
  );
}

export default App;
