import Gallery from "react-photo-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export interface PhotoGalleryItem {
  src: string;
  width: number;
  height: number;
}

interface IPhotoGalleryProps {
  images: PhotoGalleryItem[];
}

function PhotoGallery({ images }: IPhotoGalleryProps) {
  return <Gallery photos={images} />;
}

export default PhotoGallery;
