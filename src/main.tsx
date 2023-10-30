import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorInfo from './components/ErrorBoundary/ErrorInfo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorInfo />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
