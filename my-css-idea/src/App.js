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
import RotatingCardOne from "./Pages/Image-design/RotatingCard/RotatingCard1";
import DropdownAnimation from "./Pages/dropdown-animation/dropdown-animation";
import CardHoverAnimation from "./Pages/card-hover-animation/cardHoverAnimation";

function App() {
  return (
    <div className="App">
      <CardHoverAnimation/>
      <DropdownAnimation/>
      <GhostText />
      <ImageShape />
      <Card3D />
      <RotatingCard />
      <RotatingCardOne />
      <FilterImage />
      <BackImageText />
      <BackVideoText />
      <CircleText />
      <CyclingGradient />
      <Loader />
    </div>
  );
}

export default App;
