import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '~/components/Routes/Routes';

const BigHeader = styled.h1.attrs({
  className: 'text-3xl font-bold underline',
})``;

function App() {
  return (
    <div>
      <BigHeader>hello world</BigHeader>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
