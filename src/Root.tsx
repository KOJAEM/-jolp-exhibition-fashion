import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Kojaem from 'pages/kojaem/KojaemRouter';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Kojaem} />
    </BrowserRouter>
  );
}

export default Root;
