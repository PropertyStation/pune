import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EastPune from './Top Location/East Pune/EastPune'
import WestPune from './Top Location/West Pune/WestPune';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/east-pune' element={<EastPune/>}/>
        <Route path='/west-pune' element={<WestPune/>}/>

      </Routes>
    </Router>
  )
}

export default App