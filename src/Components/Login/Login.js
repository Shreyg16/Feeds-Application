import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <form action="" id='outerboundry'>
      <h1 className='login-heading'>LOGIN PAGE</h1>
      <div >
        <input type="text" className='user-input' placeholder='USERNAME' required /> <br />
        <input type="password" className='pass-input' placeholder='PASSWORD' required  /> <br />
        <button type="submit" className='btn btn-primary' id='login-btn' ><Link to='/postform'  id='login'>LOGIN</Link></button> 
         <button  type="submit" className="btn btn-primary" id='register-btn' >REGISTER</button>
        
      </div>
      </form>
    </div>
  )
}

export default Login
