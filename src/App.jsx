import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Staking from "./pages/Staking";
import Header from "./components/Header/index.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="staking" element={<Staking />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
