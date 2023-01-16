import Navbar from '../../components/Navbar'
import './Technology.css'
import { technologies } from '../../data'
import { useState } from 'react'

const Technology = () => {
  const [indexTechno, setIndexTechno] = useState(0)
  return (
    <section className='technology'>
      <Navbar />
      <div className='section-content'>
        <h2 className='title-section'>
          <span>03</span>space launch 101
        </h2>
        <div className='techno-description'>
          <div className='text'>
            <div className='indications'>
              <div
                className={indexTechno === 0 ? 'active' : 'none'}
                onClick={() => setIndexTechno(0)}
              >
                <p>1</p>
              </div>
              <div
                className={indexTechno === 1 ? 'active' : 'none'}
                onClick={() => setIndexTechno(1)}
              >
                <p>2</p>
              </div>
              <div
                className={indexTechno === 2 ? 'active' : 'none'}
                onClick={() => setIndexTechno(2)}
              >
                <p>3</p>
              </div>
            </div>
            <div className='title-text'>
              <p className='terminology'>The terminology ...</p>
              <h3>{technologies[indexTechno].name}</h3>
              <p className='para'>{technologies[indexTechno].description}</p>
            </div>
          </div>
          <div className='image'>
            <img
              src={technologies[indexTechno].images.portrait}
              alt='technology image'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
