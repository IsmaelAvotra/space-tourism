import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../assets/shared/logo.svg'

const Navbar = () => {
  const [isActiveNav, setIsActiveNav] = useState(false)
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <nav>
          <ul className='underline-indicators'>
            <li
              className={isActiveNav ? 'active' : 'none'}
              onClick={() => setIsActiveNav(true)}
            >
              <Link to='/' className='navtext'>
                <span>00</span>home
              </Link>
            </li>
            <li className={isActiveNav ? 'active' : 'none'}>
              <Link
                to='/destination'
                className='navtext'
                onClick={() => setIsActiveNav(true)}
              >
                <span>01</span>destination
              </Link>
            </li>
            <li
              className={isActiveNav ? 'active' : 'none'}
              onClick={() => setIsActiveNav(true)}
            >
              <Link to='/crew' className='navtext'>
                <span>02</span>crew
              </Link>
            </li>
            <li
              className={isActiveNav ? 'active' : 'none'}
              onClick={() => setIsActiveNav(true)}
            >
              <Link to='/technology' className='navtext'>
                <span>03</span>technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
