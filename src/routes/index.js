import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LibraryRoute from "./Library";
import HomeRoute from './Home'
import AboutRoute from './About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />
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