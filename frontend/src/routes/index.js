import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LibraryRoute from "./Library";
import HomeRoute from './Home'
import AboutRoute from './About'
import ErrorRoute from './Error'
import Header from '../components/Header'

function Router(){
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <HomeRoute /> } errorElement={ <ErrorRoute /> } />
        <Route path="/library" element={ <LibraryRoute /> } />
        <Route path="/about" element={ <AboutRoute /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;