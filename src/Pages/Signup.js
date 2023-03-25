import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/Signup.css";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function Signup() {
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Navigate('/notes');
    } else {
      Navigate('/');
    }
  }, [Navigate]);
  
  const [islogin, setIslogin] = useState(false);

  return (
    <div className='signup'>

      <div className='signupContainer'>

        <div className='logo'>
          <h1><TipsAndUpdatesIcon />Keeper</h1>
          <div className='logoContainer'>
            {islogin ? <h2>Login</h2> : <h2>Sign-Up</h2>}
            <p>Continue to RS-Keep</p>
          </div>
        </div>

        <div className="authentication">
          <a className='google' href='https://rs-keepbackend.onrender.com/auth/google'>
            <GoogleIcon /> <span>Sign-Up with Google</span>
          </a>
          <p>or</p>
          <a className='facebook' href='https://rs-keepbackend.onrender.com/auth/facebook'>
            <FacebookIcon /> <span>Sign-Up with Facebook</span>
          </a>
        </div>

        <div className="signupFooter">
          { islogin ? <p>New to RS-Keep ? <strong onClick={() => { setIslogin(false) }}>Sign-Up</strong></p> :
          <p>Already Registered ? <strong onClick={() => { setIslogin(true) }}>Login</strong></p>}
          
        </div>

      </div>
    </div>
  );
};

export default Signup;