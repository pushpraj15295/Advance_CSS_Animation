import "./App.css";

import GhostText from "./Pages/Text-design/ghostTexts/GhostText";
import BackImageText from "./Pages/Text-design/BackImageText/BackImageText";
import BackVideoText from "./Pages/Text-design/BackVideoText/BackVideoText";
import CyclingGradient from "./Pages/Image-design/CyclingGradient/CyclingGradient";
import CircleText from "./Pages/Image-design/CircleText/CircleText";
import ImageShape from "./Pages/Image-design/ImageShape/ImageShape";
import FilterImage from "./Pages/Image-design/FilterImage/FilterImage";
import Loader from "./Pages/Loader/Loader";
import Card3D from "./Pages/Image-design/3Dcard/Index";
import RotatingCard from "./Pages/Image-design/RotatingCard/RotatingCard";
import BackgroundImageUnderContent from "./Pages/video-animation/background-image/background-image";

function App() {
  return (
    <div className="App">
      <BackgroundImageUnderContent />
      <GhostText />
      <ImageShape />
      <FilterImage />
      <Card3D />
      <RotatingCard />
      <BackImageText />
      <BackVideoText />
      <CircleText />
      <CyclingGradient />
      <Loader />
    </div>
  );
}

export default App;
