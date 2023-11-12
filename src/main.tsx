import { createElement, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorInfo from './components/ErrorBoundary/ErrorInfo';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Product } from './types';

const SearchResultWrapper = ({
  componentType,
}: {
  componentType: ({
    results,
    setResults,
  }: {
    results: Product[];
    setResults: (results: Product[]) => void;
  }) => JSX.Element;
}) => {
  const [results, setResults] = useState<Product[]>([]);
  return createElement(componentType, { results, setResults });
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorInfo />}>
      <SearchResultWrapper componentType={App}></SearchResultWrapper>
    </ErrorBoundary>
  </BrowserRouter>
);
