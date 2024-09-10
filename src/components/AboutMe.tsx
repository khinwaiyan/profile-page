import { AboutMeContainer, ImageWrapper } from '../styles/aboutMe.styled';
import { AnimatedText1, AnimatedText2 } from '../styles/aboutMe.styled';
import { TextWrapper } from '../styles/common.styled';
import { ImageContainer } from '../styles/common.styled';
import { Span } from '../styles/common.styled';
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

        <AnimatedText2 delay="2s">
          컴퓨터공학부 <Span>21</Span>힉번
        </AnimatedText2>

        <AnimatedText2 delay="4s">
          <Span>코딩</Span>을 좋아하고, 사람들과 <Span>이야기</Span> 나누는 것을
          즐깁니다.{' '}
        </AnimatedText2>
      </TextWrapper>
    </AboutMeContainer>
  );
};
