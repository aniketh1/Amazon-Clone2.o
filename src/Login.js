import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {
  return (
    <div className='login'>
        <Link to="/">
        <img className='login__logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget-picto.com%2Fwp-content%2Fuploads%2F2023%2F07%2Famazon-logo-png.webp&f=1&nofb=1&ipt=25a155aeb22a5dd10ea5976ede1aa0321531d79c10693b394d9663269e2bbf42&ipo=images'/>
        </Link>
        <div className='login__container'>
            <h1 className='login__header'>
                Sign in
            </h1>
            <form>
                <h5>Email</h5>
                <input type='text'/>


                <h5>Password</h5>
                <input type='password'/>

                <button className='login__signinbutton'>Sign In</button>
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
            </p>

            <button className='login__registerbutton'>Create your amazon account</button>
        </div>
    
    </div>
  ) 
}

export default Login
