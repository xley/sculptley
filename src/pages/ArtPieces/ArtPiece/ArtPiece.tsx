import {
  ArrowIcon,
  StyledBlurb,
  StyledButton,
  StyledButtonContainer,
  StyledImage,
  StyledDetails,
  StyledDetail,
  StyledTitle,
  Wrapper,
} from "./ArtPiece.style";
import { useHistory } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

export interface IArtPiece {
  route: string;
  title: string;
  titleImage: string;
  company?: string;
  date?: string;
  location?: string;
  details?: string[];
  blurb: string;
  photoGallery: IPhoto[];
  imageCarousel: ICarouselImage[];
}

interface IPhoto {
  width: number;
  height: number;
  src: string;
}

interface ICarouselImage {
  original: string;
  thumbnail: string;
}

interface Props {
  art: IArtPiece;
}

function ArtPiece({ art }: Props) {
  let history = useHistory();
  let carouselRef = useRef<ReactImageGallery>(null);

  function handleBack() {
    history.goBack();
  }

  const handlePhotoClick = async (event: any) => {
    const imgIndex = art.imageCarousel.findIndex(
      (img) => img.original === event.target.getAttribute("src")
    );
    if (carouselRef.current) {
      carouselRef.current.slideToIndex(imgIndex);
      carouselRef.current.fullScreen();
    }
  };

  return (
    <Wrapper>
      <StyledImage>
        <StyledButtonContainer>
          <ArrowIcon />
          <StyledButton onClick={handleBack}>BACK</StyledButton>
        </StyledButtonContainer>
        <StyledTitle>{art.title}</StyledTitle>
        <StyledDetails>
          <StyledDetail>{art.location}</StyledDetail>
        </StyledDetails>
      </StyledImage>
      <StyledDetails>
        <StyledDetail>{art.date}</StyledDetail>
        {art.details?.map((detail) => (
          <StyledDetail>{detail}</StyledDetail>
        ))}
      </StyledDetails>
      <StyledBlurb>{art.blurb}</StyledBlurb>
      <Gallery
        photos={art.photoGallery}
        onClick={(e: any) => handlePhotoClick(e)}
      />
      <ImageGallery
        useBrowserFullscreen={false}
        ref={carouselRef}
        items={art.imageCarousel}
      />
    </Wrapper>
  );
}

export default ArtPiece;
