import React, { useEffect, useReducer } from 'react'
import './investment.css'
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom'


const reducer = (state,action)=>{
  switch(action.type){
case 'FETCH_REQUEST':
  return {...state,loading:true};
  case 'FETCH_SUCCESS':
    return {...state,products:action.payload,loading:false};
    case 'FETCH_FAIL':
      return {...state,loading:false,error:action.payload};
      default:
        return state;
  }
}

export default function Investment() {

  const [{loading,error,products},dispatch] = useReducer(reducer,{
    products:[],
     loading:true,
     error:'',
    })
   
  useEffect(()=>{
    const fetchData = async()=>{
      dispatch({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('https://dygranabis.onrender.com/api/plan')
      dispatch({type:'FETCH_SUCCESS',payload:result.data})
      }catch(err){
    dispatch({type:'FETCH_FAIL',payload:err.message})
      }
    
    } 
    fetchData()
      },[])
      
  return (
    <>
     <Helmet>
                <title>Investment</title>
            </Helmet>
   <div class="bg__green">
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Who We Are
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
    </div>

      <section class="investment__section">
      <h2 class="heading__secondary color--black align">Simple pricing</h2>
      <p class="investment__info align">
      Investors can anticipate robust returns as we capitalize on the industry's <br/> growth with a focus on sustainability and quality
      </p>
      <div class="investment">
        {
          loading? <div>Loading</div>
          :
          error? <div>{error}</div>
          :  
          products.map(product=>( <div class="investment__plans plan--1">
          <div key={product._id} class="plan__details"> 
            <h4 class="plan--header color">{product.plan}</h4>
            <span class="plan--price color">${product.price1} - ${product.price2}</span>
            <span class="plan--description color">{product.desc}</span>
          </div>

          <Link to={"/paymentplan"} class="plan__subscription--btn">Upgrade to Lite plan
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
          </Link>
        </div>))
        }
       
      </div>

    
    </section>

    <div class="bg__nuetral"></div>

    <section class="contact__field">
      <h2 class="heading__secondary color--white align">
        Do you have more questions?
      </h2>
      <p class="contact__instruction align color--white">
      Feel free to contact us for additional information or any inquiries. We are here to assist you and provide the information you need.
      </p>
      <div class="btn__container align">
        <a href="#" class="primary__btn bg--white algin">Contact Us</a>
      </div>
    </section>

    </>
  )
}
