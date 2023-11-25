import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ErrorInfo from "./components/ErrorBoundary/ErrorInfo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<ErrorInfo />}>
    <App />
  </ErrorBoundary>
);
