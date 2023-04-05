import React, { useRef, useState } from 'react';
import { Button } from "@material-ui/core";
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';



export const Contact = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[subject, setSubject] = useState("");
  const[message, setMessage] = useState("");
  const [error, setError] = useState(null);
  
  function isValidEmail(email) {
    return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
  }

  const form = useRef();
  const sendEmail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError(null);
      toast.success('Message Sent Successfully!!', {theme:"colored"})
    } else {
      setError(null);
    }
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    
    emailjs.sendForm('service_icw3wxq', 'template_ffsxpnj', form.current, 'pGdW5GJFImXAWd_PT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="homepage ">
      <div className="heading text-center">Contact Us</div>
      <div className='row margin0rem' id='maincontact' style={{display:'flex'}}>
      <div className='emailbox col-6 margin0rem'>
      <form className="mt-3 contact-us card" ref={form} onSubmit={sendEmail}>
          <label className="maillable" style={{fontSize:'22px'}}>Get In Touch</label>

          <label className="maillable mt-2 ms-4">Name</label>
          <input className="mailfields" type="text" name='from_name' onChange={e => setName(e.target.value)} value={name} placeholder="What's your good name? "/>

          <label className="maillable mt-2 ms-4">Email</label>
          <input className="mailfields" type="email" name='from_email' onChange={e => setEmail(e.target.value)} value={email} placeholder="What's your mail address? " />
          {error && <h2 style={{color: 'red'}}>{error}</h2>}

          <label className="maillable mt-2 ms-4">Subject</label>
          <input className="mailfields" name='from_subject' type="text" onChange={e => setSubject(e.target.value)} value={subject} placeholder="What's the subject? " />

          <label className="maillable mt-2 ms-4">Message</label>
          <textarea className="mailfields" name="message" onChange={e => setMessage(e.target.value)} value={message} placeholder="What you want to say? " />

          <Button className="mt-4 btn-send" type="submit" value="Send" variant="contained" > <ForwardToInboxRoundedIcon/></Button>
          
        </form>
      </div>
      
      <div className=' addressbox col-6 margin0rem'>
        <h1 className='address'>Address</h1>
        <div className='addresscontent '>Badrinath Road, GolaGanj <br/></div>
        <div className='addresscontent '>Lucknow, Uttar Pradesh, India.<br/></div>
        <div className='addresscontent '>Pin No:226018<br/></div>
        <div className='addresscontent '><CallRoundedIcon />+91 639169 4444<br/></div>
        <div className='addresscontent' style={{display:'flex'}}><MailRoundedIcon/><span>syedwajahathusainabdi01@gmail.com</span></div>
        <div className="socialIcon" >
          <a className="icondeco me-2" href="https://www.instagram.com/theonlywajahat/" target='_blank' rel="noopener noreferrer"> <span ><InstagramIcon /> </span> </a>
          <a className="icondeco me-2" href="https://www.linkedin.com/in/syed-wajahat-husain-abdi-365259202/" target='_blank' rel="noopener noreferrer"> <span ><LinkedInIcon /></span></a>
          <a className="icondeco" href="https://github.com/syedwajahat01/" target='_blank' rel="noopener noreferrer"> <span ><GitHubIcon /></span> </a>
          
        </div>
        <span className='copyright'>Copyright© 2023 Wajahat.</span>
      </div>

      </div>

      

    <ToastContainer />
    
    
    </div>
  )
}
