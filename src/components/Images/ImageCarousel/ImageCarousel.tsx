import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface ImageCarouselItem {
  original: string;
  thumbnail: string;
}

interface IImageCarouselProps {
  images: ImageCarouselItem[];
}

function ImageCarousel({ images }: IImageCarouselProps) {
  return <ImageGallery items={images} autoPlay useBrowserFullscreen={false} />;
}

export default ImageCarousel;
