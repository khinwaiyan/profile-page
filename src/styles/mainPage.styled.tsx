import styled from 'styled-components';

import { Container } from './container.styled';

export const PageContainer = styled(Container)`
  height: calc(100vh - 4rem);
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const Section = styled.section`
  height: 100%;
  scroll-snap-align: start;
`;
