import { useState } from 'react'
import Index from './components'
import Kemenag from './components/Kemenag'
import Login from './components/Login'
import NavigasiBar from './components/Navbar'
// import './App.css'

function App() {

  return (
    <>
      <div className="index">
        {/* <Kemenag/> */}
        {/* <Index/> */}
      </div>
      <div className="login">
        <Login/>
      </div>
      {/* <NavigasiBar/> */}
    </>
  )
}

export default App
