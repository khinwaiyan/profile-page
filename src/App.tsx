import 'animate.css';

import { Fragment } from 'react';

import { MainPage } from '../src/components/MainPage';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/globalStyle.styled';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <MainPage />
    </Fragment>
  );
}

export default App;
