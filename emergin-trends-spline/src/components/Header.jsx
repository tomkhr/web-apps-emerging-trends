import React from 'react'
import Logo from './Logo'
import Links from './Links'
import '../index.css';

function Header() {
  return (
    <div className='myHeader'>
        <Logo />
        <Links />
    </div>
  )
}

export default Header