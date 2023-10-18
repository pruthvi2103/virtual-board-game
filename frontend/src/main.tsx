import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
      <Toaster />
    </Theme>
  </React.StrictMode>
);
