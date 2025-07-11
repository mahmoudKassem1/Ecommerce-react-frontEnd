import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get exclusive offers on your email</h1>
        <p>subscribe to out news letter and stay updated!</p>
        <div>
            <input type="email" placeholder='your email address' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
