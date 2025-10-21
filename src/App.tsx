import { Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Tours from "./pages/Tours/Tours"
import TourDetails from "./pages/TourDetails/TourDetails"
import Contact from "./pages/Contact/Contact"
import Faq from "./pages/Faq/Faq"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/category" element={<Categories/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/tours/:id" element={<TourDetails/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
