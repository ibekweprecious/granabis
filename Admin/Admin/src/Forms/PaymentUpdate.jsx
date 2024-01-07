import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'
import { useParams,useNavigate,Link } from 'react-router-dom'

export default function PaymentUpdate() {
  const [name,setName] = useState('')
  const [walletAddress,setWalletAddress] = useState('')

 
  
  const params = useParams()
  const id = params.id
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
  const data = {name,walletAddress}
  const response = await fetch('https://dygranabis.onrender.com/api/payment/' + id,{
method:'PATCH',
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



const handleDelete = async()=>{
 // DELETE request using fetch inside useEffect React hook
 fetch('https://dygranabis.onrender.com/api/payment/' + id, { method: 'DELETE' })
 .then(() => setStatus('Delete successful'));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
// window.location.reload();
}


  return (
    <>
    {/* <Header/> */}
    <div className="formheight">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
    <h1>Payment Gateway</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Crypto</label>
          <input
            type="text"
            name="name"
            placeholder="Crypto"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Wallet Address</label>
          <input
            type="text"
            name="walletAddress"
            placeholder="Wallet address"
            value={walletAddress}
            onChange={(e)=>{
              setWalletAddress(e.target.value)
            }}
          />
        </div>
       
        <button type='submit' style={{padding:"10px",background:"white",borderRadius:"10px"}}  className="fluid ui">Submit</button>
        <button onClick={handleDelete}   style={{marginLeft:"20px",padding:"10px",background:"white",borderRadius:"10px"}}   class="button_two">Delete</button>
      </div>
      <div style={{marginTop:"24px"}}>
      <span className='status'>{status} Go back to</span> <Link to={"/"} style={{fontSize:"20px"}}> Home</Link> 
      </div>
    </form>
  </div>

  </>
  )
}
