import ContentSlider from "./ContentSlider";
import GallerySliders from "./GallerySliders";

export default function SliderMain() {
  return (
    <div className=" flex flex-col md:flex-row justify-around py-20 clients-section">
      <GallerySliders />
      <ContentSlider />
    </div>
  );
}
