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
import DragAndDrop from "./Pages/DragAndDrop/DragAndDrop";
import { MultiDragAndDrop } from "./Pages/MultiDragAndDrop/MultiDragAndDrop";
import { CrossBoxDragAndDrop } from "./Pages/CroseBoxDragAndDrop/CroseBoxDragAndDrop";
import SvgAnimation from "./Pages/svgAnimation/svgAnimation";
import ResponsiveImageGallery from "./Pages/ResponsiveImageGallery/ResponsiveImageGallery";
import MyPet from "./Pages/MyPet/MyPet";
import DragCreateDiv from "./Pages/DragCreateDiv/DragCreateDiv";

function App() {
  return (
    <div className="App">
      <MyPet />
      <SvgAnimation />
      <DropdownAnimation />
      <DragAndDrop />
      <MultiDragAndDrop />
      <CrossBoxDragAndDrop />
      <GhostText />
      <ImageShape />
      <CardHoverAnimation />
      <Card3D />
      <RotatingCard />
      <RotatingCardOne />
      <FilterImage />
      <BackImageText />
      <BackVideoText />
      <CircleText />
      <CyclingGradient />
      <ResponsiveImageGallery />
      <Loader />
      <DragCreateDiv />
    </div>
  );
}

export default App;
