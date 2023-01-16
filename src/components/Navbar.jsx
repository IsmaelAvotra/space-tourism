import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Navbar.css'
import logo from '../assets/shared/logo.svg'

const Navbar = () => {
  const [isActiveNav, setIsActiveNav] = useState(0)
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
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
    </div>
  )
}

export default Navbar
