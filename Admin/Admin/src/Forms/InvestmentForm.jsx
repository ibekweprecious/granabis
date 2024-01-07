import { useEffect,useState } from 'react'
import React from 'react'
import './form.css'
import { Link,useNavigate } from 'react-router-dom'



export default function InvestmentForm() {
   const [plan,setPlan] = useState('')
  const [price1,setPrice1] = useState('')
  const [price2,setPrice2] = useState('')
  const [desc,setDesc] = useState('')
 

   const navigate = useNavigate() 
 
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {plan,price1,price2,desc}
  const response = await fetch('https://dygranabis.onrender.com/api/plan/post',{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
  'Content-type':'application/json'
}
  })
  const json = await response.json()

}
const handleSubmit = async(e)=>{
  window.location.reload()
}

  return (
    <>
    <div className="formheight">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
      <h1>Investment Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Plan</label>
          <input
            type="text"
            name="plan"
            placeholder="Plan"
            value={plan}
            onChange={(e)=>{
              setPlan(e.target.value)
            }}
          />
        </div>
        
        <div className="field">
          <label>Price 1</label>
          <input
            type="text"
            name="price1"
            placeholder="Price"
            value={price1}
            onChange={(e)=>{
              setPrice1(e.target.value)
            }}   
          />
        </div>
        
        <div className="field">
          <label>Price 2</label>
          <input
            type="text"
            name="price2"
            placeholder="price"
            value={price2}
            onChange={(e)=>{
              setPrice2(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Desc</label>
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={(e)=>{
              setDesc(e.target.value)
            }}
          />
        </div>

        <button type='submit' style={{padding:"10px",background:"white",borderRadius:"10px"}}  className="fluid ui">Submit</button>
        <div style={{marginTop:"24px"}}>
      <span className='status'>{status} Go back to</span> <Link to={"/"} style={{fontSize:"20px"}}> Home</Link> 
      </div>
      </div>
    </form>
  </div>

  </>
  )
}
