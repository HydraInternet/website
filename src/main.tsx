import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import RootPage from "./page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>
);
