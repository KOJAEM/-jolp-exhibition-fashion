import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Kojaem from 'pages/kojaem/KojaemRouter';

function Root() {
  return (
    <BrowserRouter>
        <Route path="/kojaem" component={Kojaem} />
    </BrowserRouter>
  );
}

export default Root;
