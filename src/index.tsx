/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
