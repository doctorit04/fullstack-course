import React from 'react'
import './Menu.css'

export default function Menu() {

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];  

  return (
    <>
        <h2 className='title'>Menu</h2>
        <ul>
            {menuItems.map((item, index) => (
                <li key={index}>item.name</li>
            ))}
        </ul>
    </>
  )
}
