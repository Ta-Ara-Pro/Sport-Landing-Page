import 'react-toastify/dist/ReactToastify.css';
import '../custom-toast/custom-toast.css'
import React, { useState } from 'react'
import { ToastContainer , toast } from 'react-toastify'
import axios from 'axios';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sport-landing-page-server.vercel.app/api/contact', { name, email, message });

      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      // toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
      alert('Failed to send message');
      // toast.error('Failed to send message.');
    }
  };

  return (
    <div className='contact'>
      <div className='header2'>
        <h1>Contact Us</h1>
      </div>

      <div className='container'>
        <div className='desc1'>
          <span className='ex'>
            Feel free to contact us to get more information about subscription to our community
            and get to know about our ineternational plans and project. Ask any question that helps
            the clarification.
            We are open to any suggestions and collaboration.
          </span>
        </div>
        <div className='formcontainer'>
          <h1 className='em'>Email Us</h1>
          <div className='formmain'>
            <form className='for' onSubmit={handleSubmit}>
              <label className='la'>Your Name</label>
              <input type='text' placeholder='Enter Your Name'  name='name'  value={name} onChange={(e) => setName(e.target.value)} required/>
              <label className='la'>Your Email</label>
              <input type='text' placeholder='Enter Your Email'  name='email'  value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label className='la'>Your Message</label>
              <textarea rows="8" placeholder="Message"   name="message"  value={message} onChange={(e) => setMessage(e.target.value)}> required</textarea>
              <button className='but2' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer 
       position="bottom-right" // or "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"
       autoClose={2000}
       hideProgressBar={false}
       closeOnClick
       pauseOnHover
       draggable/> */}
  
    </div>
  )
}

export default Contact
