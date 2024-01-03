import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage";
import ArticleNews from "./pages/ArticleNews";
import ErrorPage from "./pages/ErrorPage";

import { dateMinusOneMonth } from "./services/formatDate";
import ArtistPage from "./pages/ArtistPage";

const apiUrl = import.meta.env.VITE_API_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiSingleUrl = import.meta.env.VITE_API_URL_SINGLE;

const apiDate = dateMinusOneMonth();

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => fetch(`${apiUrl}&from=${apiDate}&pageSize=20${apiToken}`),
      },
      {
        path: "/news/:title",
        element: <ArticleNews />,
        loader: ({ params }) =>
          fetch(`${apiSingleUrl}${params.title}${apiToken}`),
      },
      {
        path: "/artists",
        element: <ArtistPage />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artists`),
      },
    ],
    ErrorBoundary: () => <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
