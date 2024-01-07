import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'
import { useParams,useNavigate,Link } from 'react-router-dom'

export default function Update() {
  const [plan,setPlan] = useState('')
  const [price1,setPrice1] = useState('')
  const [price2,setPrice2] = useState('')
  const [desc,setDesc] = useState('')
  const [status,setStatus] = useState('')
 
  
  const params = useParams()
  const id = params.id
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
  const data = {plan,price1,price2,desc}
  const response = await fetch('https://dygranabis.onrender.com/api/plan/' + id,{
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
 fetch('https://dygranabis.onrender.com/api/plan/' + id, { method: 'DELETE' })
 .then(() => setStatus('Delete successful'));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
// window.location.reload();
}


  return (
    <>
    {/* <Header/> */}
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
       
        <button  type='submit' style={{padding:"10px",background:"white",borderRadius:"10px"}}  className="fluid ui">Submit</button>
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
