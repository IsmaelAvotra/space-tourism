import { useState } from 'react'
import './Crew.css'
import Navbar from '../../components/Navbar'

import { crew } from '../../data'

const Crew = () => {
  const [indexIndicator, setIndexIndicator] = useState(0)
  return (
    <section className='crew'>
      <Navbar />
      <div className='section-content'>
        <h2 className='title-section'>
          <span>02</span>Meet tour crew
        </h2>
        <div className='crew-description'>
          <div className='text'>
            <h4 className='role'>{crew[indexIndicator].role}</h4>
            <h3 className='name'>{crew[indexIndicator].name}</h3>
            <p>{crew[indexIndicator].bio}</p>

            <div className='indicators'>
              <div
                className={indexIndicator === 0 ? 'active' : 'none'}
                onClick={() => setIndexIndicator(0)}
              ></div>
              <div
                className={indexIndicator === 1 ? 'active' : 'none'}
                onClick={() => setIndexIndicator(1)}
              ></div>
              <div
                className={indexIndicator === 2 ? 'active' : 'none'}
                onClick={() => setIndexIndicator(2)}
              ></div>
              <div
                className={indexIndicator === 3 ? 'active' : 'none'}
                onClick={() => setIndexIndicator(3)}
              ></div>
            </div>
          </div>
          <div className='image'>
            <img src={crew[indexIndicator].images.webp} alt='profile crew' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew
