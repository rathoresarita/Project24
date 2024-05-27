// Login.js
import React from 'react';
import '../css/login.css'; // Import CSS file containing styles
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <div className='login-container'>
    <div className='login-form'>
        <h1>User Login</h1>
        <form>
        <input type='text' placeholder='uername'></input>
        <input type='password' placeholder='password'></input>
<Link  to ='/auth'>
        <button>Login</button>

        </Link>
</form>
        
    </div>
  </div>
  );
};

export default Login;
