import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LibraryRoute from "./Library";
import HomeRoute from './Home'
import AboutRoute from './About'
import ErrorRoute from './Error'

function Router(){
  return (
    <BrowserRouter>
      <div id="navbar__container">
        <Link to="/"> Home </Link>
        <Link to="/library"> Library </Link>
        <Link to="/about"> About </Link>
      </div>

      <Routes>
        <Route path="/" element={ <HomeRoute /> } errorElement={ <ErrorRoute /> } />
        <Route path="/library" element={ <LibraryRoute /> } />
        <Route path="/about" element={ <AboutRoute /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;