import React, { Component } from 'react';
import {FaWhatsapp, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <div className='cont' >
                <p> Thanks for visiting our site, <br/> We are always at your service. <br/> You can also reach out to us on <br/> the following social media platforms.</p>
            <nav className='footers' >
               <footer>
                 <ul>
                    <li><a href="https://wa.me/2348108541029" rel='noopener noreferrer' target='_blank' ><FaWhatsapp size='30px' color='green' /></a></li>
                    <li><a href="https://www.facebook.com/valentine.ifedayo.3" rel='noopener noreferrer' target='_blank'  ><FaFacebookSquare size='30px' color='blue'  /></a></li>
                    <li><a href="https://twitter.com/@valo_dagreat" rel='noopener noreferrer' target='_blank'  ><FaTwitterSquare size='30px' color='blue' /></a></li>
                </ul>   
               </footer>
               <p>Copyright ©2020 All rights reserved</p> 
            </nav>
            </div>
        )
    }
}

export default Footer
