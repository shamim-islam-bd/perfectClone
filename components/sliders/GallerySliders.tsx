import { default as HorizontalSlider } from "./HorizontalSlider";
import VerticalSlider from "./VerticalSlider";

export default function GallerySliders() {
  return (
    <div className="w-full lg:w-1/2 md:w-1/2 py-10 grid grid-cols-3 gap-1 p-20 opacity-50">
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
      <VerticalSlider />
      <HorizontalSlider />
    </div>
  );
}
