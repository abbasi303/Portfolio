import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Certificates} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
          </div>
            <About/>
            <Experience/>
            <Tech/>
            <Works title="Web Development Projects" description="Some description" type="webdev" />
            <Works title="Data Science Projects" description="Some description" type="datascience" />
            <Certificates/>



              <Contact/>

              <StarsCanvas/>



        

       </div>
    </BrowserRouter>
  )
}

export default App
