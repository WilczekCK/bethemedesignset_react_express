import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Homepage</div>,
  },
  {
    path: "/library",
    element: <div>Library</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  }
]);

export {router, RouterProvider};