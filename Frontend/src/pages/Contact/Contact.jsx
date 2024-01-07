import React, { useState } from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { Helmet } from 'react-helmet-async'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Link} from "react-router-dom"

const reducer = (state,action)=>{
  switch(action.type){
case 'FETCH_REQUEST':
  return {...state,loading:true};
  case 'FETCH_SUCCESS':
    return {...state,address:action.payload,loading:false};
    case 'FETCH_FAIL':
      return {...state,loading:false,error:action.payload};
      default:
        return state;
  }
}
export default function Contact() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [text,setText] = useState('')
 

  const [{loading,error,address},dispatch] = useReducer(reducer,{
    address:[],
     loading:true,
     error:'',
    })
   
  useEffect(()=>{
    const fetchData = async()=>{
      dispatch({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('https://dygranabis.onrender.com/api/address')
      dispatch({type:'FETCH_SUCCESS',payload:result.data})
      console.log(result)
    }catch(err){
      dispatch({type:'FETCH_FAIL',payload:err.message})
    }
    
  } 
  fetchData()
},[])

   const navigate = useNavigate() 
 
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {name,email,text}
  const response = await fetch('https://dygranabis.onrender.com/api/contact/post',{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-type':'application/json'
}
  })
  const json = await response.json()
}

 const handleSubmit = async(e)=>{
    window.open("/success", "_self");
  }

  return (
   <>
    <div class="bg__green">
      <Helmet>
                <title>Contact</title>
            </Helmet>
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Contacts
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
    </div>

    <div class="contact__page flex__align wrapper">
      <div class="contact__info--left">
      {
  address.map(address=>(
    <div>
        <div class="contact__address flex__align">
          <Link to="" class="address location__link">
            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Map Pin">
              <g id="Group">
              <path id="Vector" d="M11.6562 46.2188H40.3438" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M26 27.0938C27.6908 27.0938 29.3123 26.4221 30.5078 25.2266C31.7033 24.031 32.375 22.4095 32.375 20.7188C32.375 19.028 31.7033 17.4065 30.5078 16.2109C29.3123 15.0154 27.6908 14.3438 26 14.3438C24.3092 14.3438 22.6877 15.0154 21.4922 16.2109C20.2966 17.4065 19.625 19.028 19.625 20.7188C19.625 22.4095 20.2966 24.031 21.4922 25.2266C22.6877 26.4221 24.3092 27.0938 26 27.0938V27.0938Z" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M41.9375 20.7188C41.9375 35.0625 26 46.2188 26 46.2188C26 46.2188 10.0625 35.0625 10.0625 20.7188C10.0625 16.4919 11.7416 12.4381 14.7305 9.44924C17.7193 6.46037 21.7731 4.78125 26 4.78125C30.2269 4.78125 34.2807 6.46037 37.2695 9.44924C40.2584 12.4381 41.9375 16.4919 41.9375 20.7188V20.7188Z" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </g>
              </svg>
              
          </Link>
          <span class="location--address">{address.address},</span>
          <span class="location--address add--2">{address.location}</span>
        </div>

        <div class="contact__address flex__align">
          <Link to="#" class="address mail__link">
            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Email" clip-path="url(#clip0_163_4857)">
              <g id="Group">
              <g id="Group_2">
              <g id="Group_3">
              <path id="Vector" d="M48.95 5.94971H3.05C1.64172 5.94971 0.5 7.09133 0.5 8.49971V42.4997C0.5 43.908 1.64162 45.0497 3.05 45.0497H48.95C50.3583 45.0497 51.5 43.9081 51.5 42.4997V8.49971C51.5 7.09143 50.3584 5.94971 48.95 5.94971ZM49.8 42.4998C49.8 42.9692 49.4195 43.3497 48.95 43.3497H3.05C2.58054 43.3497 2.20003 42.9692 2.20003 42.4998V8.49971C2.20003 8.03025 2.58054 7.64974 3.05 7.64974H48.95C49.4195 7.64974 49.8 8.03025 49.8 8.49971V42.4998Z" fill="#228B22"/>
              <path id="Vector_2" d="M47.3239 9.35289C47.0993 9.33327 46.8761 9.40369 46.7035 9.54872L27.0939 26.0216C26.4614 26.5533 25.5384 26.5533 24.9059 26.0216L5.29654 9.54862C5.06395 9.35339 4.7448 9.29701 4.45942 9.4008C4.17404 9.5046 3.96566 9.75282 3.91286 10.052C3.86007 10.3511 3.97084 10.6556 4.20342 10.8508L23.8129 27.3229C25.0768 28.3871 26.9231 28.3871 28.1871 27.3229L47.7965 10.8509C47.9692 10.706 48.0772 10.4984 48.0968 10.2738C48.1164 10.0492 48.046 9.82594 47.901 9.65331C47.7561 9.48049 47.5485 9.37251 47.3239 9.35289Z" fill="#228B22"/>
              <path id="Vector_3" d="M16.8483 27.206C16.5474 27.1388 16.2338 27.2398 16.0286 27.4699L4.12856 40.2199C3.91321 40.4405 3.83412 40.7604 3.92197 41.0559C4.00983 41.3514 4.25079 41.5761 4.55161 41.6433C4.85253 41.7104 5.1661 41.6094 5.37129 41.3793L17.2713 28.6293C17.4867 28.4088 17.5658 28.0888 17.4779 27.7934C17.3901 27.4979 17.1492 27.2731 16.8483 27.206Z" fill="#228B22"/>
              <path id="Vector_4" d="M35.9714 27.4699C35.7663 27.2398 35.4526 27.1388 35.1517 27.206C34.8508 27.2731 34.6099 27.4979 34.5221 27.7934C34.4342 28.0889 34.5133 28.4088 34.7287 28.6293L46.6287 41.3793C46.9514 41.7098 47.479 41.7221 47.8167 41.407C48.1545 41.0918 48.1788 40.5647 47.8714 40.2198L35.9714 27.4699Z" fill="#228B22"/>
              </g>
              </g>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_163_4857">
              <rect width="51" height="51" fill="white" transform="translate(0.5)"/>
              </clipPath>
              </defs>
              </svg>
              
          </Link>
          <span class="location--address">{address.email}</span>
          <span class="location--address add--2">{address.customerEmail}</span>
        </div>
        <div class="contact__address flex__align">
          <Link to="#" class="address call__link">
            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="PhoneCall">
              <g id="Group">
              <path id="Vector" d="M31.9829 7.24219C34.9249 8.03345 37.6074 9.58385 39.7616 11.7381C41.9159 13.8923 43.4663 16.5748 44.2575 19.5168" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M30.1865 13.9502C31.9513 14.425 33.5604 15.3551 34.8527 16.6474C36.145 17.9396 37.0751 19.5488 37.5499 21.3136" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M17.4625 25.6416C19.2621 29.322 22.2449 32.292 25.933 34.0757C26.2031 34.2036 26.5018 34.2589 26.7998 34.2361C27.0977 34.2133 27.3846 34.1131 27.632 33.9456L33.0639 30.3255C33.3038 30.1653 33.5799 30.0674 33.8671 30.0408C34.1544 30.0141 34.4437 30.0595 34.709 30.1728L44.8699 34.5287C45.215 34.6753 45.5032 34.9301 45.691 35.2546C45.8788 35.5792 45.9561 35.956 45.9112 36.3283C45.5895 38.8411 44.3631 41.1506 42.4616 42.8244C40.56 44.4983 38.1135 45.4217 35.5802 45.4219C27.7558 45.4219 20.2518 42.3136 14.7191 36.7809C9.18637 31.2482 6.07813 23.7442 6.07812 15.9198C6.07836 13.3866 7.00185 10.9404 8.67571 9.03914C10.3496 7.13784 12.659 5.91181 15.1717 5.59057C15.544 5.54568 15.9208 5.62294 16.2454 5.81074C16.5699 5.99853 16.8247 6.28669 16.9713 6.63182L21.3307 16.8014C21.4428 17.0641 21.4883 17.3505 21.4632 17.6351C21.4381 17.9196 21.3431 18.1936 21.1867 18.4327L17.577 23.9478C17.4132 24.1962 17.3165 24.4828 17.2964 24.7796C17.2764 25.0765 17.3336 25.3734 17.4625 25.6416V25.6416Z" stroke="#228B22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </g>
              </svg>
              
          </Link>
          <span class="location--address">{address.mobileNo1}</span>
          <span class="location--address add--2">{address.mobileNo2}</span>
        </div>
    </div>
    
  ))
}

        
      </div>


      <div class="contact__info--right">
        <h2 class="heading__small size--big2">
          Just Say Hello!
        </h2>

        <p class="contact__desc">
          Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
        </p>

        <form onSubmit={handleFormSubmit} action="" class="contact__form">
          <fieldset class="details__fieldset flex__align">
            <input value={name} onChange={(e)=>{
              setName(e.target.value)
            }} type="text" name="user--name" id="user--name" placeholder="Name" required/>
            <input value={email}  onChange={(e)=>{
              setEmail(e.target.value)
            }} type="email" name="contact--email" id="contact--email" placeholder="zakirsoft@gmail.com" required/>
          </fieldset>
         
          <textarea value={text}  onChange={(e)=>{
              setText(e.target.value)
            }} name="subject" id="subject" cols="30" rows="7" placeholder="subject" required></textarea>

          <button onClick={handleSubmit} class="submit--btn primary__btn green">Send Message</button>
        </form>
      </div>
    </div>
   </>
  )
}
