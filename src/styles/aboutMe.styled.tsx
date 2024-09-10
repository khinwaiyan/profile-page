import styled from 'styled-components';

import { Container } from './container.styled';
export const AboutMeContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const TmiContainer = styled(AboutMeContainer)`
  margin: 3rem;
  gap: 2rem;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  flex: 2;
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
