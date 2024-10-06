import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const basename =
  process.env.NODE_ENV === 'production' ? '/asktrollolo' : '';

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);