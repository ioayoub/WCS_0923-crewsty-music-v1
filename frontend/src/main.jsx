import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArticleNews from "./pages/ArticleNews";

const apiUrl = import.meta.env.VITE_API_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiSingleUrl = import.meta.env.VITE_API_URL_SINGLE;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => fetch(`${apiUrl}&pageSize=20${apiToken}`),
      },
      {
        path: "/news/:title",
        element: <ArticleNews />,
        loader: ({ params }) =>
          fetch(`${apiSingleUrl}${params.title}${apiToken}`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
