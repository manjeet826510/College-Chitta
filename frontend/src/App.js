import React from 'react'
import {  BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Para1 from './components/Para1'
import Para2 from './components/Para2'
import HomeScreen from './screens/HomeScreen';
import '../src/css/style.css'
import '../src/css/responsive.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
       
          
        <main>
      
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              

             

         
            

              {/* <Route path="*" element={<ErrorScreen />} /> */}
            </Routes>
     
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App