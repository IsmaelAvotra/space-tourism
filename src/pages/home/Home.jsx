import './Home.css'

import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <Navbar />
      <div className='banner'>
        <div className='left'>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='right'>
          <Link to='/destination' className='large-btn'>
            Explore
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
