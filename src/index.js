import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import movieReducer from './store/movieSlice';
import { BrowserRouter as Router } from 'react-router';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// import store from './store/store';
export const store = configureStore({ reducer: movieReducer });
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
