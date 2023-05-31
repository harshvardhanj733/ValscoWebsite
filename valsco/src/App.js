import { LoadingPage } from "./components/Loading/LoadingPage"
import ProductsPage from "./components/Products/ProductsPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import './App.css';
import React , {useState} from 'react';
import Navbar from "../src/components/Blogs/Components/Navbar"
import BlogHome from '../src/components/Blogs/Components/BlogHome';
import CreateBlog from '../src/components/Blogs/Components/CreateBlog';
import Login from '../src/components/Blogs/Components/Login';
import DetailedBlog from '../src/components/Blogs/Components/DetailedBlog';
import Slider from '../src/components/Blogs/Components/Slider';
import Contact from './components/Contact/Contact.js';

function App() {
  const [authenticated,setAuthenticated]=useState(localStorage.getItem("authenticated"));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><LoadingPage/><ProductsPage /><Slider authenticated={authenticated}/><Contact /></>}></Route>
        <Route exact path='/BlogHome' element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/><BlogHome authenticated={authenticated}/></>}/>
        <Route exact path='/CreateBlog' element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/><CreateBlog authenticated={authenticated}/></>}/>
        <Route exact path='/Login' element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/><Login setAuthenticated={setAuthenticated} authenticated={authenticated}/></>}/>
        <Route exact path='/DetailedBlog/:ID' element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/><DetailedBlog authenticated={authenticated}/></>}/>
      </Routes>
    </Router>
    // <LoadingPage/>
    // <Slide/>
  )
}

export default App
