import { useEffect,useState } from 'react'
import React from 'react'
import './form.css'
import { Link,useLocation,useNavigate } from 'react-router-dom'



export default function Form() {
   const [name,setProductName] = useState('')
  const [desc,setProductDesc] = useState('')
  const [slug,setSlug] = useState('')
  const [image,setImage] = useState('')
  const [price,setPrice] = useState('')
  const [rating,setRating] = useState('')
  const [file,setfile] = useState('')
 

 
 
function previewFiles(file){
  const reader = new FileReader()
reader.readAsDataURL(file)

reader.onloadend = ()=>{
  setImage(reader.result)
}
}

   const handleChange = (e) => {
    const file = e.target.files[0]
   setfile(file)
   previewFiles(file)
   }
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {name,desc,slug,price,rating,image}
const response = await fetch('https://dygranabis.onrender.com/api/products/post',{
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
    {/* <Header/> */}
    <div className="formheight">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
      <h1>Product Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={name}
            onChange={(e)=>{
              setProductName(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Unique Slug</label>
          <input
            type="text"
            name="name"
            placeholder="Unique Slug"
            value={slug}
            onChange={(e)=>{
              setSlug(e.target.value)
            }}
          />
        </div>
        <div className='field'>
          <label htmlFor='fileInput'>Upload Image</label>
          <input type='file' id='fileInput' onChange={e => handleChange(e)} required accept="image/png, image/jpeg, image/jpg, image/jfif"/>
        
        </div>
        <img src={image? image : ""} style={{width:"50px"}}/>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Product Description"
            value={desc}
            onChange={(e)=>{
              setProductDesc(e.target.value)
            }}   
          />
        </div>
        
        <div className="field">
          <label>Rating</label>
          <input
            type="text"
            name="rating"
            placeholder="rating"
            value={rating}
            onChange={(e)=>{
              setRating(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e)=>{
              setPrice(e.target.value)
            }}
          />
        </div>
        {/* onClick={handleSubmit} */}
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
