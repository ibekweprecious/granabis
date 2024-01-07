import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'
import { useParams,useNavigate,Link } from 'react-router-dom'

export default function DeleteBlog() {

  const params = useParams()
  const id = params.id



const handleDelete = async()=>{
 // DELETE request using fetch inside useEffect React hook
 fetch('https://dygranabis.onrender.com/api/plan/' + id, { method: 'DELETE' })
 .then(() => setStatus('Delete successful'));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
// window.location.reload();
}


  return (
    <div>
      <button onClick={handleDelete}   style={{marginLeft:"20px",padding:"10px",background:"white",borderRadius:"10px",marginTop:"50px"}}   class="button_two">Delete</button>
    </div>
  )
}
