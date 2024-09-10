import { PageContainer, Section } from '../styles/mainPage.styled';
import { AboutMe } from './AboutMe';
import { MbtiGrid } from './Mbti';
import { Tmi } from './Tmi';
export const MainPage = () => {
  return (
    <PageContainer>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="mbti">
        <MbtiGrid />
      </Section>
      <Section id="tmi">
        <Tmi />
      </Section>
    </PageContainer>
  );
};
