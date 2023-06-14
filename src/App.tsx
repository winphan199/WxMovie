import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '~/components/Routes/Routes';
import { ToggleSideBarProvider } from './contexts/ToggleSideBarContext';

function App() {
  return (
    <div>
      <ToggleSideBarProvider>
        <Router>
          <Routes />
        </Router>
      </ToggleSideBarProvider>
    </div>
  );
}

export default App;
