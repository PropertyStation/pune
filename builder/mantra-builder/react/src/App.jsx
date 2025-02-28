import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@fontsource/montserrat'; // Defaults to weight 400
import Homepage from './Homepage';
import Thanks from './Thanks';
const App = () => {
  return (
 
    <Router>
      
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thanks" element={<Thanks />} />
      
      </Routes>
    
    </Router>

  )
}

export default App
