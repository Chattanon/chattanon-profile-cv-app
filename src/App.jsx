import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Porflie from './views/proflie'
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <><CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Porflie />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App