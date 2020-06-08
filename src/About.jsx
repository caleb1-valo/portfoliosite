import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className='about' >
                <h1 id='about' >About Me</h1>
                <div className='aboutall'>
                <div className='about1' >
                <p>I'm Ifedayo Valentine,a 300lvl student of the department of civil
                    engineering in the prestigious University Of ibadan.
                    I attended K.Kotun Memorial School as a child and got my FSLC
                    in the school.My academic pursuit continued as i obtained my BECE 
                    certificate. <br/>
                    <button><a href="#home">Return Home</a></button>
                    </p></div><div className='about2' ><img src={require('./images/valosky.jpg')} alt="valentine"/></div><div className='about3' > <p>The pursuit for academic knowledge continued
                    as i proceeded to C.S.H.S and obtained my S.S.C.E 
                    before gaining admission into the higher institution i'm presently schooling.I'm also a frontend web developer with 2months experience,
                    I use React JS majorly for my various projects which makes my projects exceptional. <br/>
                    <button><a href="#services">My Services</a></button>
                </p></div>
                </div>
            </div>
        )
    }
}

export default About
