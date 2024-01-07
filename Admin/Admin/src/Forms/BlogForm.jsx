import { useEffect,useState } from 'react'
import React from 'react'
import './form.css'
import { Link,useNavigate } from 'react-router-dom'



export default function BlogForm() {
  const [posterName,setPosterName] = useState('')
  const [title,setTitle] = useState('')
  const [slug,setSlug] = useState('')
  const [subtitle,setSubtitle] = useState('')
  const [paragraph1,setParagraph1] = useState('')
  const [paragraph2,setParagraph2] = useState('')
  const [paragraph3,setParagraph3] = useState('')
  const [paragraph4,setParagraph4] = useState('')
  const [paragraph5,setParagraph5] = useState('')
  const [file,setfile] = useState('')
  const [file1,setfile1] = useState('')
  const [file2,setfile2] = useState('')
  const [image,setImage] = useState('')
  const [image2,setImage2] = useState('')
  const [image3,setImage3] = useState('')
 

   const navigate = useNavigate() 
 
   function previewFiles(file){
    const reader = new FileReader()
  reader.readAsDataURL(file)
  
  reader.onloadend = ()=>{
    setImage(reader.result)
  }
  }
   function previewFiless(file1){
    const reader = new FileReader()
  reader.readAsDataURL(file1)
  
  reader.onloadend = ()=>{
    setImage2(reader.result)
  }
  }
   function previewFilesss(file2){
    const reader = new FileReader()
  reader.readAsDataURL(file2)
  
  reader.onloadend = ()=>{
    setImage3(reader.result)
  }
  }
  
     const handleChange = (e) => {
      const file = e.target.files[0]
     setfile(file)
     previewFiles(file)
     }
     const handleChange1 = (e) => {
      const file = e.target.files[0]
     setfile1(file)
     previewFiless(file)
     }
     const handleChange2 = (e) => {
      const file = e.target.files[0]
     setfile2(file)
     previewFilesss(file)
     }
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {posterName,image,image2,image3,title,subtitle,paragraph1,paragraph2,paragraph3,paragraph4,paragraph5}
  const response = await fetch('https://dygranabis.onrender.com/api/blog/post',{
method:'POST',
body: JSON.stringify(data),
headers:{
  'Content-type':'application/json'
}
  })
  const json = await response.text()
  window.open("/success", "_self");
}

const handleSubmit = async(e)=>{
  window.open("/success", "_self");
}

  return (
    <>
    {/* <Header/> */}
    <div className="formheight">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
      <h1>Blog Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Poster Name</label>
          <input
            type="text"
            name="name"
            placeholder="Poster Name"
            value={posterName}
            onChange={(e)=>{
              setPosterName(e.target.value)
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
          <input type='file' id='fileInput' onChange={e => handleChange(e)}  accept="image/png, image/jpeg, image/jpg, image/jfif"/>
        
        </div>
        <img src={image? image : ""} style={{width:"50px"}}/>
        <div className='field'>
          <label htmlFor='fileInput2'>Upload Image</label>
          <input type='file' id='fileInput2' onChange={e => handleChange1(e)}  accept="image/png, image/jpeg, image/jpg, image/jfif"/>
        
        </div>
        <img src={image2? image2 : ""} style={{width:"50px"}}/>
        <div className='field'>
          <label htmlFor='fileInput3'>Upload Image</label>
          <input type='file' id='fileInput3' onChange={e => handleChange2(e)}  accept="image/png, image/jpeg, image/jpg, image/jfif"/>
        
        </div>
        <img src={image3? image3 : ""} style={{width:"50px"}}/>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}   
          />
        </div>
        
        <div className="field">
          <label>Subtitle Title</label>
          <input
            type="text"
            name="subtitle"
            placeholder="SubTitle"
            value={subtitle}
            onChange={(e)=>{
              setSubtitle(e.target.value)
            }}   
          />
        </div>

        <div className="field">
          <label>Paragraph 1</label>
          <input
            type="text"
            name="paragraph1"
            placeholder="Text"
            value={paragraph1}
            onChange={(e)=>{
              setParagraph1(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Paragraph 2</label>
          <input
            type="text"
            name="paragraph2"
            placeholder="Text"
            value={paragraph2}
            onChange={(e)=>{
              setParagraph2(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Paragraph 3</label>
          <input
            type="text"
            name="paragraph3"
            placeholder="Text"
            value={paragraph3}
            onChange={(e)=>{
              setParagraph3(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Paragraph 4</label>
          <input
            type="text"
            name="paragraph4"
            placeholder="Text"
            value={paragraph4}
            onChange={(e)=>{
              setParagraph4(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Paragraph 5</label>
          <input
            type="text"
            name="paragraph5"
            placeholder="Text"
            value={paragraph5}
            onChange={(e)=>{
              setParagraph5(e.target.value)
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
