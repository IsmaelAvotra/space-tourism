import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className={openNav ? 'links active' : 'links'}>
        <nav>
          <ul className='underline-indicators'>
            <li>
              <Link to='/' className='navtext'>
                <span>00</span>home
              </Link>
            </li>
            <li>
              <Link to='/destination' className='navtext'>
                <span>01</span>destination
              </Link>
            </li>
            <li>
              <Link to='/crew' className='navtext'>
                <span>02</span>crew
              </Link>
            </li>
            <li>
              <Link to='/technology' className='navtext'>
                <span>03</span>technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='menu' onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <img src={close} alt='close icon' />
        ) : (
          <img src={hamburger} alt='menu icon' />
        )}
      </div>
    </div>
  )
}

export default Navbar
