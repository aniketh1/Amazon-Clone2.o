import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
      navigate('/');  // Redirect after successful sign-in
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      if (userCredential) {
        navigate('/');  // Redirect after successful registration
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <Link to="/">
        <img 
          className='login__logo' 
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget-picto.com%2Fwp-content%2Fuploads%2F2023%2F07%2Famazon-logo-png.webp&f=1&nofb=1&ipt=25a155aeb22a5dd10ea5976ede1aa0321531d79c10693b394d9663269e2bbf42&ipo=images' 
          alt='Amazon Logo'
        />
      </Link>
      <div className='login__container'>
        <h1 className='login__header'>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input 
            type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input 
            type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit' className='login__signinbutton' onClick={signIn}>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button type='submit' className='login__registerbutton' onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
