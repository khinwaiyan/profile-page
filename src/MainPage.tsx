import { AboutMe } from './components/AboutMe';
import { PageContainer, Section } from './styles/mainPage.styled';

export const MainPage = () => {
  return (
    <PageContainer>
      <Section id="about-me">
        <AboutMe />
      </Section>
    </PageContainer>
  );
};
