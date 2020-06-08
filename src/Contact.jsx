import React, { Component } from 'react';
import axios from 'axios';
import {FaCheck} from 'react-icons/fa'

class Contact extends Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        message:'',
        load:false
    }
    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handleForm = e => {
        axios.post(
            "https://formcarry.com/s/82WH2gYkqjgB", 
            this.state, 
            {headers: {"Accept": "application/json"}}
          )
          .then(function (response) {
            
            // access response.data in order to check formcarry response
            if(response.data.success){
              // handle success
            } else {
              // handle error
              console.log(response.data.message);
            }
     
          })
          .catch(function (error) {
            console.log(error);
          });
        e.preventDefault()
        this.setState({load:true})
      }
    render() {
        let feedback =this.state.load===false? null: <p><FaCheck color='green' size='25px' />
        We've gotten your message, <br/> Thanks {this.state.firstName} {this.state.lastName} <br/>
        for reaching out to us.</p>
        return (
            <div className='contacts' >
                <h1 id='contact' >CONTACT FORM</h1>
               <form onSubmit={this.handleForm} >
                   <div className='name' >
                       <input type="text" name='firstName' placeholder='First Name' 
                       value={this.state.firstName} onChange={this.handleChange} required />
                       <input type="text" id='lastname' name='lastName' placeholder='Last Name' 
                       value={this.state.lastName} onChange={this.handleChange} required />
                   </div>
                   <div className='gmail' >
                     <input type="email" name='email' placeholder='Email'
                     value={this.state.email} onChange={this.handleChange} required />
                   </div>
                    <div className='txt' >
                       <textarea name="message" id="yourmsg"
                       value={this.state.message} placeholder='type your message here..................'
                        onChange={this.handleChange} required />
                   </div>
                   <div className='submit' >
                     <button>Submit Request</button>
                   </div>
                </form> 
                <div className='feedback' >{feedback}</div>
            </div>
        )
    }
}

export default Contact
