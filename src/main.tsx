import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalContextProvider } from "./context/globalContextProvider.tsx";
import reducer, { initState } from "./context/reducer";
import "./index.css";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalContextProvider initialState={initState} reducer={reducer}>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
