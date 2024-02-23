import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Certificates, Academics} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
          </div>
            <About/>
            <Academics/>
            <Experience/>
            <Tech/>
            <Works title="Projects" description="Some description" type="webdev" />
            {/* <Works title="Data Science Projects" description="Some description" type="datascience" /> */}
            <Certificates/>



              <Contact/>




        

       </div>
    </BrowserRouter>
  )
}

export default App
