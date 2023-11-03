import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorInfo from './components/ErrorBoundary/ErrorInfo';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorInfo />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
