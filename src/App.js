import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Products from './pages/Products';

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' excat element={<Home/>}></Route>
    <Route path='/about' excat element={<About/>}></Route>
    <Route path='/analytics' excat element={<Analytics/>}></Route>
    <Route path='/users' excat element={<Users/>}></Route>
    <Route path='/settings' excat element={<Settings/>}></Route>
    <Route path='/products' excat element={<Products/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
