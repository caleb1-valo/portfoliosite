import React from 'react'

class Headers extends React.Component {
   
    render(){
    return (
        <div className='homepage'>
         <header> 
        <nav className='headers' >
           <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
           </ul> 
        </nav>
        </header>
        <main id='home' >
        <div className='home' >
         <p ><span id='heading' >i'm ifedayo valentine</span>
          <br/>i'm a frontend web devoloper</p>  
        </div>
        </main>
        </div>
    )}
}

export default Headers
