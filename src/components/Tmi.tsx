import { TmiContainer } from '../styles/aboutMe.styled';
import { TextWrapper } from '../styles/common.styled';
import { ImageContainer } from '../styles/common.styled';
import { Text1 } from '../styles/common.styled';
import { SpinningImage } from '../styles/header.styled';
export const Tmi = () => {
  return (
    <TmiContainer>
      <ImageContainer borderRadius="50%">
        <SpinningImage src="/images/globe.jpg"></SpinningImage>
      </ImageContainer>
      <TextWrapper>
        <Text1>TMI로 말씀드리자면, 저는 미얀마에서 왔어요.</Text1>
      </TextWrapper>
      <ImageContainer borderRadius="50%">
        <SpinningImage src="/images/pagoda.jpg"></SpinningImage>
      </ImageContainer>
    </TmiContainer>
  );
};
