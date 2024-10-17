import React, { useEffect, useState } from 'react'
import './Header.css'


import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
function Header() {
  const [username, setUsername] = useState('')
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user && user.email) {
      const extractedUsername = user.email.split('@')[0]; // Extract username from email
      setUsername(extractedUsername);
    } else {
      setUsername(''); // Reset if user is not logged in
    }
  }, [user]);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img
          className='header__logo'
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreelogopng.com%2Fimages%2Fall_img%2F1688364164amazon-logo-transparent.png&f=1&nofb=1&ipt=04b76369828b6c248de538f3ca44106f70e155510f0058b216e6fee15a005993&ipo=images'
          alt='Amazon logo'
        />
      </Link>
      <div className='header__search'>
        <input
          className='header__searchInput' type='text' />
        <div className='header__searchIcon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" className='header__searchIcon' /></svg>

        </div>
        {/* <SearchIcon className='header__searchIcon'/>             */}
      </div>

      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div className='header__option' onClick={handleAuthentication}>
            <span className='header__optionLineOne'>Hello {username ? username : "Guest"}</span>
            <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to={"/orders"}>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>Orders</span>
          </div>
        </Link>
        <Link to={"https://www.amazon.com/amazonprime"}>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>

        </Link>
        <Link to="/checkout">
          <div className='header__optionBasket'>
            {/* <ShoppingBasketIcon/> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>

        </Link>
      </div>
    </div>
  )
}

export default Header
