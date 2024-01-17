import React from 'react'
import './contact.css'
import MapComponent from '../../components/MapComponent';

function Contact() {
  return (
    <div className='contact-container'>
    <h1>Nossa Localização</h1>
    <div >
      <MapComponent />
    </div>
  </div>
  )
}

export default Contact;
