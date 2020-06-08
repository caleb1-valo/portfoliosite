import React from 'react';
import {FaAccusoft, FaDesktop,FaUserGraduate} from 'react-icons/fa';

function Services() {
    return (
      <div className='services' >
       <h1 id='services' >my services</h1>
       <div className='developer' >
         <h3> <span id='devid' > <FaAccusoft color='lightskyblue' size='25px' /></span>  WEB DEVELOPMENT</h3>
         <p >I'm a front end web developer <br/> who uses React JS for your desired  projects.
         <br/>You can reach out to us for your Web and Mobile app projects too.</p>
       </div>
       <div className='designer' >
        <h3><span id='design' ><FaDesktop color='lightskyblue' size='25px' /></span> WEB DESIGNING</h3>
        <p>I create the very <br/> best  web designs you <br/> need for your various websites. <br/>
        I design very interactive,user-friendly,stressfree websites you desire. </p>
       </div>
       <div className='academician' >
         <h3><span id='academics' ><FaUserGraduate color='lightskyblue' size='25px'  /></span>ACADEMIC TUTORING</h3>
         <p>I help different <br/>high-school students understand <br/> core subjects like mathematics..... <br/>It's very much affordable,trust me. </p>
       </div>
      </div>
    )
}

export default Services