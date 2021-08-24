import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface ImageGalleryItem {
  original: string;
  thumbnail: string;
}

interface IPhotoGalleryProps {
  images: ImageGalleryItem[];
}

function PhotoGallery({ images }: IPhotoGalleryProps) {
  return <ImageGallery items={images} autoPlay useBrowserFullscreen={false} />;
}

export default PhotoGallery;
