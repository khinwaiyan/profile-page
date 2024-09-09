import { Fragment } from 'react';

import Header from './components/Header';
import { GlobalStyle } from './styles/globalStyle.styled';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
