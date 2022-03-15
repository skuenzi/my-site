import style from './index.css'
import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'




function App() {



  return (
    <div className="App" >
      <Header/>
      <Home />
      <Portfolio />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
