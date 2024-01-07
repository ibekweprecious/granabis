import React, { useContext, useEffect, useState } from 'react'
import Axios  from 'axios'
import './contact.css'
import './register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { Store } from '../../../Store/Store'
import { getError } from '../../../util/Util'
import { Helmet } from 'react-helmet-async'

export default function Register() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/success';

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError] = useState('')
  const [Passerror,setPassError] = useState('')
  const [passOpen, setPassOpen] = useState(false) 
  const [ConpassOpen, setConPassOpen] = useState(false) 


  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {email,password}
    if (password !== confirmPassword) {
      setPassError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://dygranabis.onrender.com/api/users/signup',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
        'Content-type':'application/json'
      }
        })
        const json = await response.json()
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      setError('Email already exist');
    }
   
  };
  

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <section class="registration__section">
       <Helmet>
                <title>Register</title>
            </Helmet>
    <div class="registration">
      <h2 class="heading__secondary color--black align">Create Account</h2>
      <form onSubmit={submitHandler} class="registration__form form">
        <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" class="user__mails" id="registration__users--email" placeholder="Email" required/>
        <fieldset class="password__container flex__align">
          <input onChange={(e)=> setPassword(e.target.value)} type={passOpen? "text" : "password"} name="Password" class="password" id="registration__users--password" placeholder="Password" required/>
          <svg onClick={(passOpen)=>setPassOpen(passOpen)} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="eye-open 1">
            <g id="Group">
            <path id="Vector" d="M1.66699 10.5003C1.66699 10.5003 4.69699 4.66699 10.0003 4.66699C15.3037 4.66699 18.3337 10.5003 18.3337 10.5003C18.3337 10.5003 15.3037 16.3337 10.0003 16.3337C4.69699 16.3337 1.66699 10.5003 1.66699 10.5003Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2" d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13V13Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            </svg>
        </fieldset>
         <p>{Passerror}</p>   
        <fieldset class="password__container flex__align">
          <input onChange={(e)=> setConfirmPassword(e.target.value)} type={ConpassOpen? "text" : "password"} name="Confirm--password" class="password" id="registration__confirm--password" placeholder="Confirm Password" required/>
          <svg onClick={(ConpassOpen)=>setConPassOpen(ConpassOpen)} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="eye-open 1">
            <g id="Group">
            <path id="Vector" d="M1.66699 10.5003C1.66699 10.5003 4.69699 4.66699 10.0003 4.66699C15.3037 4.66699 18.3337 10.5003 18.3337 10.5003C18.3337 10.5003 15.3037 16.3337 10.0003 16.3337C4.69699 16.3337 1.66699 10.5003 1.66699 10.5003Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2" d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13V13Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            </svg>
            
        </fieldset>
        
        <input type="checkbox" id="accept--terms" name="accept--terms" required value="Accept all terms and Conditions"/>
        <label for="terms__condition" class="terms" >
          Accepts all terms and Conditions
        </label>
        <button style={{cursor:"pointer"}} class="registration--btn primary__btn green">
          Create Account
        </button>

        <div class="reset align">
          
          <span class="follow--login">Have an account?</span>
          <Link to="/login" class="login__page--link"> Login</Link>
          <p>{error}</p>
        </div>
      </form>
    </div>

    </section>

  )
}
