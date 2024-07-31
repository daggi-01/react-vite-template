import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";

const container = document.getElementById("APP");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#APP" 요소가 존재 하지 않습니다.');
}
