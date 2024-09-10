import { AboutMe } from './components/AboutMe';
import { MbtiGrid } from './components/Mbti';
import { PageContainer, Section } from './styles/mainPage.styled';
export const MainPage = () => {
  return (
    <PageContainer>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="mbti">
        <MbtiGrid />
      </Section>
    </PageContainer>
  );
};
