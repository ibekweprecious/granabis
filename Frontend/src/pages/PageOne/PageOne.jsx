import React, { useEffect, useReducer } from 'react'
import './pageone.css'
import BlogImg1 from '../../assets/img/blog-images/image(1).png'
import BlogImg2 from '../../assets/img/blog-images/image(2).png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getError } from '../../../util/Util'
import { Helmet } from 'react-helmet-async'



const reducer = (state,action)=>{
  switch(action.type){
case 'FETCH_REQUEST':
  return {...state,loading:true};
  case 'FETCH_SUCCESS':
    return {...state,blog:action.payload,loading:false};
    case 'FETCH_FAIL':
      return {...state,loading:false,error:action.payload};
      default:
        return state;
  }
}
export default function PageOne() {
  const params = useParams()
  const {id} = params
  const navigate = useNavigate();


    const [{loading,error,blog},dispatch] = useReducer(reducer,{
        blog:[],
         loading:true,
         error:'',
        })
       
         useEffect(()=>{
       const fetchData = async()=>{
         dispatch({type:'FETCH_REQUEST'});
         try{
           const result = await axios.get(`https://dygranabis.onrender.com/api/blog/${id}`)
         dispatch({type:'FETCH_SUCCESS',payload:result.data})
         }catch(err){
       dispatch({type:'FETCH_FAIL',payload:getError(err)})
         }
        
       } 
       fetchData()
         },[id])
  return (
    <section class="blog__page--one wrapper">
      <Helmet>
                <title>{blog.title}</title>
            </Helmet>
    <figure class="blog__news--img">
      <img src={blog.image} alt={blog.title}/>
    </figure>

    <div class="news__category flex__align">
      <span class="category">Category</span>
      <small class="news__date">{new Date(blog.createdAt).toDateString()}</small>
    </div>

    <h2 class="heading__primary color--black blog__heading">
      {blog.title}
    </h2>

    <h3 class="heading__tetiary size--big2 quote">
     {blog.subtitle}
    </h3>

    <p class="para">{blog.paragraph1}</p>
    <p class="para">{blog.paragraph2}</p>

    <div class="grid--3col sub--images">
      <img src={blog.image1} alt="sub image"/>
      <img src={blog.image2} alt="sub image"/>
    </div>

    <p class="para">
     {blog.paragraph3}
     {blog.paragraph4}
     {blog.paragraph5}
    </p>
  </section>

  )
}
