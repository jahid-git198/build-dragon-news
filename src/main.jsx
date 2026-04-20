import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Routers.jsx";
import ProviderAut from "./AutoProvider/ProviderAut.jsx";
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderAut>
      <RouterProvider router={router}></RouterProvider>
    </ProviderAut>
  </StrictMode>,
);
