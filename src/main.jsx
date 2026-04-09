import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { registerSW } from "virtual:pwa-register";

// Import the PrivyProvider
// import { PrivyProvider } from "@privy-io/react-auth";

registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log("New content available, refresh the page.");
  },
  onOfflineReady() {
    console.log("App ready to work offline.");
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <App />
  </StrictMode>
);
