import Navbar from '../../components/Navbar'
import './Destination.css'
import { destinations } from '../../data.js'
import { useState } from 'react'

const Destination = () => {
  const [index, setIndex] = useState(0)
  return (
    <section className='destination'>
      <Navbar />
      <div className='section-content'>
        <h2 className='title-section'>
          <span>01</span>Pick your destination
        </h2>
        <div className='description-content'>
          <div className='image'>
            <img src={destinations[index].images.webp} alt='' />
          </div>
          <div className='text'>
            <div className='navig-title'>
              <ul className='underline-indicators'>
                <li
                  className={index === 0 ? 'navtext active' : 'navtext'}
                  onClick={() => setIndex(0)}
                >
                  moon
                </li>
                <li
                  className={index === 1 ? 'navtext active' : 'navtext'}
                  onClick={() => setIndex(1)}
                >
                  mars
                </li>
                <li
                  className={index === 2 ? 'navtext active' : 'navtext'}
                  onClick={() => setIndex(2)}
                >
                  europa
                </li>
                <li
                  className={index === 3 ? 'navtext active' : 'navtext'}
                  onClick={() => setIndex(3)}
                >
                  titan
                </li>
              </ul>
            </div>
            <h2>{destinations[index].name}</h2>
            <p className='para'>{destinations[index].description}</p>
            <div className='underline'></div>
            <div className='distance-travel'>
              <div className='distance'>
                <p className='subheading2'>avg. distance</p>
                <p className='subheading1'>{destinations[index].distance}</p>
              </div>
              <div className='travel'>
                <p className='subheading2'>est. travel time</p>
                <p className='subheading1'>{destinations[index].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
