import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom/dist/index.js";
import Home from "./components/Home.jsx";
import Templates from "./components/templates.jsx";
import Input from "./components/Input.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "templates",
        element: <Templates />,
        children: [
          {
            path: "input/:template",
            element: <Input />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
