import { LoadingPage } from "./components/Loading/LoadingPage"
import ProductsPage from "./components/Products/ProductsPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </Router>

    // <LoadingPage/>
    // <Slide/>
  )
}

export default App
