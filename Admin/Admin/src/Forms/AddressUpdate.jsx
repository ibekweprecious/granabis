import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'
import { useParams,useNavigate,Link } from 'react-router-dom'

export default function AddressUpdate() {
  const [address,setAddress] = useState('')
  const [location,setLocation] = useState('')
  const [email,setEmail] = useState('')
  const [customerEmail,setCustomerEmail] = useState('')
  const [mobileNo1,setMobileNo1] = useState('')
  const [mobileNo2,setMobileNo2] = useState('')
 
  
  const params = useParams()
  const id = params.id
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
  const data = {address,location,email,customerEmail,mobileNo1,mobileNo2}
  const response = await fetch('https://dygranabis.onrender.com/api/address/' + id,{
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



// const handleDelete = async()=>{
//  // DELETE request using fetch inside useEffect React hook
//  fetch('https://dygranabis.onrender.com/api/plan/' + id, { method: 'DELETE' })
//  .then(() => setStatus('Delete successful'));
// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// // window.location.reload();
// }


  return (
    <>
    {/* <Header/> */}
    <div className="formheight">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
    <h1>Address Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e)=>{
              setAddress(e.target.value)
            }}
          />
        </div>
        
        <div className="field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e)=>{
              setLocation(e.target.value)
            }}   
          />
        </div>
        
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Customer Help Email</label>
          <input
            type="text"
            name="customeremail"
            placeholder="Customer Email"
            value={customerEmail}
            onChange={(e)=>{
              setCustomerEmail(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Mobile No 1</label>
          <input
            type="text"
            name="mobile1"
            placeholder="Mobile"
            value={mobileNo1}
            onChange={(e)=>{
              setMobileNo1(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Mobile No 2</label>
          <input
            type="text"
            name="mobile2"
            placeholder="Mobile"
            value={mobileNo2}
            onChange={(e)=>{
              setMobileNo2(e.target.value)
            }}
          />
        </div>
       
        <button onClick={handleSubmit}  type='submit' style={{padding:"10px",background:"white",borderRadius:"10px"}}  className="fluid ui">Submit</button>
        {/* <button onClick={handleDelete}   style={{marginLeft:"20px",padding:"10px",background:"white",borderRadius:"10px"}}   class="button_two">Delete</button> */}
      </div>
      <div style={{marginTop:"24px"}}>
      <span className='status'>{status} Go back to</span> <Link to={"/home"} style={{fontSize:"20px"}}> Home</Link> 
      </div>
    </form>
  </div>

  </>
  )
}
