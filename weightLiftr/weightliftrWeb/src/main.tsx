import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register-page/register-page.tsx";
import LayoutPage from "./pages/layout-page/layout-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutPage>
        <App />
      </LayoutPage>
    ),
  },
  {
    path: "/register",
    element: (
      <LayoutPage>
        <RegisterPage />
      </LayoutPage>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
