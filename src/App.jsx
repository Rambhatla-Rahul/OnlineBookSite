import { BrowserRouter, Route, Routes } from "react-router-dom"
import TopNavbar from "./TopNavbar/TopNavbar.jsx"
import HomePage from "./Pages/Home/Catalog/HomePage.jsx"
import CartPage from "./Pages/Home/Catalog/Components/CartPage.jsx"


function App() {
  

  return (
    <>
      <TopNavbar/>
      <main className="flex flex-col">
        
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
        
      </main>
    </>
  )
}

export default App
