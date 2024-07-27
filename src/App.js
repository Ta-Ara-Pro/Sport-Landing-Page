import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/AboutUs/About'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import FQA from './components/FQA/FQA'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './components/custom-toast/custom-toast.css'





const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="gallery"><Gallery /></section>
      <section id="faq"><FQA /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <ToastContainer
       position="bottom-right"/>
      

      
    </div>
  )
}

export default App

