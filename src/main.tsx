import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Challenges from "./pages/Challenges.tsx";
import Demo from "./pages/Demo.tsx";
import Note from "./pages/Note.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="challenges/:challengeId">
          <Route index element={<Challenges />} />
          <Route path="demo" element={<Demo />} />
          <Route path="note" element={<Note />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
