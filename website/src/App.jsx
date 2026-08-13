import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import MyWork from './components/MyWork.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <MyWork />
      <Contacts />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App;

