import React from 'react';
import Logo from '../../icons/logo';
import './style.css'

const  Header = () => {
  return (
    <div className='header' data-testid='header'>
        <Logo data-testid="logo" />
      <span className='title'>Movie-do</span>
    </div>
  );
}

export default Header;