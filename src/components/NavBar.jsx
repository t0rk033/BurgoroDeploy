import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
function NavBar() {

const [menuBtn, setMenuBtn] = useState('')
const changeClass = ()=>{
  setMenuBtn((changClass)=> changClass === 'activeMenu' ? 'hiddenMenu' : 'activeMenu')
}

  return (
    <div className='navbar'>
      <div className="leftSide">
        <Link to='/' className='logo'>Burgoro</Link>
      </div>
      <div className="rightSide">
        <ul className={`navlinks ${menuBtn}`}>
            <li><Link onClick={setMenuBtn} to='/'>Home</Link></li>
            <li><Link onClick={setMenuBtn} to='/products'>Produtos</Link></li>
           
            <li><Link to={'/contact'} onClick={setMenuBtn}>Contato</Link></li>

      <button className='closeMenuBtn'onClick={changeClass}>X</button>

        </ul>
        <button className="menu-btn" onClick={changeClass}><i className='bx bx-menu' ></i></button>
        
      </div>
    </div>
  )
}

export default NavBar;
