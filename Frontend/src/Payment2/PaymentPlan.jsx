import React, { useContext, useEffect, useReducer } from 'react'
import './payment.css'
import axios from "axios"
import { Store } from '../../Store/Store';

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

export default function PaymentPlan() {

  const {state,dispatch:ctxDispatch} = useContext(Store)
  const {
      cart: {cartItems},
      userInfo
  } = state
   
 
  const [{loading,error,address},dispatch] = useReducer(reducer,{
    address:[],
     loading:true,
     error:'',
    })
   
  useEffect(()=>{
    const fetchData = async()=>{
      dispatch({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('https://dygranabis.onrender.com/api/payment')
      dispatch({type:'FETCH_SUCCESS',payload:result.data})
      console.log(result)
    }catch(err){
      dispatch({type:'FETCH_FAIL',payload:err.message})
    }
    
  } 
  fetchData()
},[])

  return (
    <div className="credit-card-form">
    <h2>PAYMENT PORTAL</h2>
<img className="Image1" src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png" alt="6375aad33dbabc9c424b5713-card-mockup-01" border="0"/>
  
    <form>
      {
        address.map(payment=>(
      <div className="form-group">
        <label for="card-number">{payment.name}</label>
        <label for="card-number">{payment.walletAddress}</label>
      </div>
        ))
      }
    </form>
  </div>
  )
}
