import { TextWrapper } from '../styles/aboutMe.styled';
import { TmiContainer } from '../styles/aboutMe.styled';
import { ImageContainer, SpinningImage } from '../styles/image.styled';
import { Text1 } from '../styles/text.styled';

export const Tmi = () => {
  return (
    <TmiContainer>
      <ImageContainer borderRadius="50%">
        <SpinningImage src="/images/globe.jpg"></SpinningImage>
      </ImageContainer>
      <TextWrapper>
        <Text1>TMI 으로는 미얀마라는 나라에서 왔답니다.</Text1>
      </TextWrapper>
      <ImageContainer borderRadius="50%">
        <SpinningImage src="/images/pagoda.jpg"></SpinningImage>
      </ImageContainer>
    </TmiContainer>
  );
};
