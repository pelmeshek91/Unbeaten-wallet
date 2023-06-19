import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="Unbeaten-wallet">
      {/* <PersistGate> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
