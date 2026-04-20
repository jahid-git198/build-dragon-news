import React from 'react'
import Navbar from '../Componet/Nabar/Navbar'
import { Outlet } from 'react-router'
 

function Authentication() {
  return (
    <div>
      
        <header>
          <Navbar></Navbar>
        </header>

        <main>
           <Outlet></Outlet>
        </main>
    </div>
  )
}

export default Authentication
