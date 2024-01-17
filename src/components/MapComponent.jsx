// MapComponent.js
import React, { useMemo } from 'react';
import './mapComponent.css';
function MapComponent() {
  return (
    <div className='map-container'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.601833894183!2d-43.221059737109364!3d-22.953892782064575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2af13ff01eb9f%3A0x8cf70199d061b749!2sCorcovado!5e0!3m2!1spt-BR!2sbr!4v1705405960224!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        
      </iframe>
    </div>
  );
}

export default MapComponent;
