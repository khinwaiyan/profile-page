import 'animate.css';

import { Fragment } from 'react';

import { Header } from './components/Header';
import { MainPage } from './MainPage';
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
