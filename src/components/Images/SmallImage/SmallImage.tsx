import { StyledImage, Wrapper } from "./SmallImage.style";

function SmallImage(image: string) {
  return (
    <Wrapper>
      <StyledImage image={image}></StyledImage>
    </Wrapper>
  );
}

export default SmallImage;
