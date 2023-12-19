import "./App.css";

import GhostText from "./Pages/Text-design/ghostTexts/GhostText";
import BackImageText from "./Pages/Text-design/BackImageText/BackImageText";
import BackVideoText from "./Pages/Text-design/BackVideoText/BackVideoText";
import CyclingGradient from "./Pages/Image-design/CyclingGradient/CyclingGradient";
import CircleText from "./Pages/Image-design/CircleText/CircleText";
import ImageShape from "./Pages/Image-design/ImageShape/ImageShape";

function App() {
  return (
    <div className="App">
      <GhostText />
      <BackImageText />
      <BackVideoText />
      <CircleText />
      <ImageShape />
      <CyclingGradient />
    </div>
  );
}

export default App;
