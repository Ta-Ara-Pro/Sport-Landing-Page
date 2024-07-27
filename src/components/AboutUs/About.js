import React from 'react'
import './About.css'
import aks from '../../assets/2.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='desc'>
           <h1> What do we care about?</h1>
           <span>
             At FitWork Initiative, our mission is to integrate physical wellness
             into the daily lives of professionals across a diverse spectrum of
             industries. We recognize that regardless of the field—be it 
             technology, finance, education, or healthcare—the sedentary nature 
             of many jobs can lead to significant health challenges. To combat 
               this, we offer tailored wellness programs designed to educate and 
             inspire individuals about the importance of regular exercise and 
             its impact on overall well-being.
           </span>
           <button className='but'>
            Get to know
           </button>
        </div>
        <div className='ima'>
            <img src={aks} alt='image'/>
        </div>

      
    </div>
  )
}

export default About
