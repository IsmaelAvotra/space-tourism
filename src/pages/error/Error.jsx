import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import { FaSadTear } from 'react-icons/fa'

const Error = () => {
  return (
    <div className='error-page'>
      <div className='content'>
        <h4>
          Sorry, this page does not exits <FaSadTear />
        </h4>
        <Link to='/'>Back Home</Link>
      </div>
    </div>
  )
}

export default Error
