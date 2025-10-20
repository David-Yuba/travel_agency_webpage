import { Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Test from "./pages/Test/Test"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Test/>}/>
          <Route path="/about" element={<Test/>}/>
          <Route path="/category" element={<Test/>}/>
          <Route path="/tours" element={<Test/>}/>
          <Route path="/tours/:id" element={<Test/>}/>
          <Route path="/contact" element={<Test/>}/>
          <Route path="/faq" element={<Test/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
