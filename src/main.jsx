import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUp from "./Pages.jsx/SignUp";
import CodeDuniya from "./Pages.jsx/CodeDuniya";

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/CodeDuniya", element: <CodeDuniya /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
