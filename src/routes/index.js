import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LibraryRoute from "./Library";
import HomeRoute from './Home'
import AboutRoute from './About'
import ErrorRoute from './Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/library",
    element: <LibraryRoute />
  },
  {
    path: "/about",
    element: <AboutRoute />
  }
]);

export {router, RouterProvider};