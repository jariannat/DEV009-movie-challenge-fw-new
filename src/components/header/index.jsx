import React from 'react';
import Logo from '../../icons/logo';
import './style.css'
const  Header = () => {
  return (
    <div className='header'>
        <Logo/>
      <span className='title'>Movie-do</span>
      {/* Contenido de la página de inicio */}
    </div>
  );
}

export default Header;