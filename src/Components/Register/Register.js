import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <form action="" className="outerboundry">
      <h1 className='register-heading'>REGISTER PAGE</h1>
      <div>
        <input type="text" className='user-input' placeholder='USERNAME' required /> <br />
        <input type="password" className='pass-input' placeholder='PASSWORD' required  /> <br />
        <input type="email" className='email-input' placeholder='EMAIL ID'  required /> <br />
        <input type="number" className='phone-input' placeholder='PHONE NO.'  required /> <br />
        <input type="text" className='drop-input' placeholder='ROLE DROPDOWN' required  /> <br />
       <button type="submit" className="btn btn-primary" id='register-login-btn'> <Link to = "/login" id='btn1' >LOGIN</Link> </button>
        <button type="submit" className="btn btn-primary" id='register-button'> <Link to='/login' id='btn2' >REGISTER</Link> </button> 
            
      </div>
      </form>
    </div>
  )
}

export default Register
