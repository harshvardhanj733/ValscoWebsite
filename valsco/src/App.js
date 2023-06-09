import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoadingPage} from './components/Loading/LoadingPage';
import ProductsPage from './components/Products/ProductsPage';
import Navbar from './components/Blogs/Components/Navbar';
import BlogHome from './components/Blogs/Components/BlogHome';
import CreateBlog from './components/Blogs/Components/CreateBlog';
import Login from './components/Blogs/Components/Login';
import DetailedBlog from './components/Blogs/Components/DetailedBlog';
import Slider from './components/Blogs/Components/Slider';
import Contact from './components/Contact/Contact';
import LandingPage from './components/Landing/LandingPage';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 2000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoadingComplete ? (
                <LoadingPage />
              ) : (
                <>
                  <div>
                  <LandingPage/>
                    <ProductsPage />
                    <Slider authenticated={authenticated} />
                    <Contact />
                  </div>
                  <Routes>
                  <Route
                    path="/BlogHome"
                    element={
                      <>
                        <Navbar
                          authenticated={authenticated}
                          setAuthenticated={setAuthenticated}
                        />
                        <BlogHome authenticated={authenticated} />
                      </>
                    }
                  />
                  <Route
                    path="/CreateBlog"
                    element={
                      <>
                        <Navbar
                          authenticated={authenticated}
                          setAuthenticated={setAuthenticated}
                        />
                        <CreateBlog authenticated={authenticated} />
                      </>
                    }
                  />
                  <Route
                    path="/Login"
                    element={
                      <>
                        <Navbar
                          authenticated={authenticated}
                          setAuthenticated={setAuthenticated}
                        />
                        <Login
                          setAuthenticated={setAuthenticated}
                          authenticated={authenticated}
                        />
                      </>
                    }
                  />
                  <Route
                    path="/DetailedBlog/:ID"
                    element={
                      <>
                        <Navbar
                          authenticated={authenticated}
                          setAuthenticated={setAuthenticated}
                        />
                        <DetailedBlog authenticated={authenticated} />
                      </>
                    }
                  />
                  </Routes>
                </>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
