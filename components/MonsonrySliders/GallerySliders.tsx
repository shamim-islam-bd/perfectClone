import { default as HorizontalSlider } from "./HorizontalSlider";
import VerticalSlider from "./VerticalSlider";

export default function GallerySliders() {
  return (
    <div className="py-10 p-6 grid grid-cols-3 gap-1 opacity-50">
      {/* <div className="flex"> */}
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      {/* </div> */}
    </div>
  );
}
