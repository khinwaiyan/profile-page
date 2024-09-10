import {
  AboutMeContainer,
  ImageWrapper,
  TextWrapper,
} from '../styles/aboutMe.styled';
import { ImageContainer } from '../styles/image.styled';
import { AnimatedText1, AnimatedText2, Span } from '../styles/text.styled';
export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <ImageWrapper>
        <ImageContainer width="auto" height="100%" opacity={0.5}>
          <img src="/images/profile.JPG" alt="Profile" />
        </ImageContainer>
      </ImageWrapper>

      <TextWrapper>
        <AnimatedText1 delay="0s">
          안녕하세요!! <Span>웨이</Span> 입니다.
        </AnimatedText1>

        <AnimatedText1 delay="2s">컴퓨터공학부 21힉번</AnimatedText1>

        <AnimatedText2 delay="4s">
          코딩 그리고 사람들 과 대화를 좋아해요.
        </AnimatedText2>
      </TextWrapper>
    </AboutMeContainer>
  );
};
