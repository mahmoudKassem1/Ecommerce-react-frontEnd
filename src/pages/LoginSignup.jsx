import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignup = () => {
  return (
    <div className='loginsinup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='your name' />
            <input type="email" placeholder='email address' />
            <input type="password" placeholder='password' />
            
        </div>
            <button>continue</button>
            <p className="login">
                Already have an account? <span>Login Here</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>by continuing  i agree on every on Mahmoud's terms & conditions </p>
            </div>
      </div>
    </div>
  )
}

export default LoginSignup
