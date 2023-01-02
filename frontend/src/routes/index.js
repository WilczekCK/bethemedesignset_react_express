import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LibraryRoute from "./Library";
import HomeRoute from './Home'
import AboutRoute from './About'
import ErrorRoute from './Error'
import NavBar from '../components/NavBar'

function Router(){
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomeRoute /> } errorElement={ <ErrorRoute /> } />
        <Route path="/library" element={ <LibraryRoute /> } />
        <Route path="/about" element={ <AboutRoute /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;