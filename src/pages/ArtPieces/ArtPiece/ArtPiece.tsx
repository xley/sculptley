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
import { carouselImages, photoGalleryImages } from "./Images";
import Gallery from "react-photo-gallery";
import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

function ArtPiece() {
  let history = useHistory();
  let carouselRef = useRef<ReactImageGallery>(null);

  function handleBack() {
    history.goBack();
  }

  const handlePhotoClick = async (event: any) => {
    const imgIndex = carouselImages.findIndex(
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
        <StyledTitle>LOST CITY</StyledTitle>
        <StyledDetails>
          <StyledDetail>GOLD COAST</StyledDetail>
        </StyledDetails>
      </StyledImage>
      <StyledDetails>
        <StyledDetail>2007</StyledDetail>
        <StyledDetail>ENTERTAINMENT CENTER</StyledDetail>
      </StyledDetails>
      <StyledBlurb>
        Decorated and designed an ancient Egypt themed Gaming room for a
        hotel/pub
      </StyledBlurb>
      <Gallery
        photos={photoGalleryImages}
        onClick={(e: any) => handlePhotoClick(e)}
      />
      <ImageGallery
        useBrowserFullscreen={false}
        ref={carouselRef}
        items={carouselImages}
      />
    </Wrapper>
  );
}

export default ArtPiece;
