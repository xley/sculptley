import { IArtPiece } from "../../pages/ArtPieces/ArtPiece/ArtPiece";
import img from "../../assets/images/lostcity-sphinx.jpeg";
import { carouselImages, photoGalleryImages } from "./images";

export const LostCity: IArtPiece = {
  route: "lostcity",
  title: "LOST CITY",
  titleImage: img,
  location: "GOLD COAST",
  date: "2007",
  details: ["ENTERTAINMENT CENTER"],
  blurb:
    "Decorated and designed an ancient Egypt themed Gaming room for a hotel/pub",
  photoGallery: photoGalleryImages,
  imageCarousel: carouselImages,
};
