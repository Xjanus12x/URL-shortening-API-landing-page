import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import URLShortenerProvider from "./context/URLShortenerProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <URLShortenerProvider>
      <App />
    </URLShortenerProvider>
  </StrictMode>
);
