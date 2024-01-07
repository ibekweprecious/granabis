import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Loader from '../../components/Loader'


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

export default function Blog() {

  const [{loading,error,blog},dispatch] = useReducer(reducer,{
    blog:[],
     loading:true,
     error:'',
    })
   
  useEffect(()=>{
    const fetchData = async()=>{
      dispatch({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('https://dygranabis.onrender.com/api/blog')
      dispatch({type:'FETCH_SUCCESS',payload:result.data})
      }catch(err){
    dispatch({type:'FETCH_FAIL',payload:err.message})
      }
    
    } 
    fetchData()
      },[])

  return (
    <section class="blog__section">
        <Helmet>
                <title>Blog</title>
            </Helmet>
      <div class="section--header">

        <h3 class="heading__tetiary-green align">BLOG</h3>
        <h2 class="heading__secondary align blog--header">In The News</h2>
      </div>

      <div class="blog__news blog__news--section grid--3col wrapper">
       
        {
          loading? <Loader/>
          :
          error? <div style={{color:"red"}}>{error}</div>
          : 
          blog.map(blog => (  
          <div key={blog._id} class="news__card">
           
          <div class="news__img">
            <img src={blog.image} alt="flower" />
          </div>

          <div class="news__details">
            <div class="news__category flex__align">
              <span class="category">Category</span>
              <small class="news__date">{new Date(blog.createdAt).toDateString()}</small>
            </div>

            <p class="news__desc">
              {blog.paragraph1.slice(0, 40)}
            </p>

            <div class="posters__details flex__align">
              <div class="posters__profile">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Element">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.00003 0C4.36633 0 3.04195 1.32437 3.04195 2.95807C3.04195 4.59176 4.36633 5.91613 6.00003 5.91613C7.63373 5.91613 8.9581 4.59176 8.9581 2.95807C8.9581 1.32437 7.63373 0 6.00003 0ZM4.01493 2.95807C4.01493 1.86173 4.90368 0.972974 6.00003 0.972974C7.09637 0.972974 7.98513 1.86173 7.98513 2.95807C7.98513 4.0544 7.09637 4.94316 6.00003 4.94316C4.90368 4.94316 4.01493 4.0544 4.01493 2.95807Z"
                      fill="#6D758F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 7.03456C4.38098 7.03456 3.17815 7.38805 2.28912 7.91872C1.39971 8.44963 0.852791 9.14093 0.519596 9.77182C0.221386 10.3365 0.318935 10.9223 0.657378 11.3473C0.98291 11.7561 1.51278 12.0001 2.08158 12.0001H9.91842C10.4872 12.0001 11.0171 11.7561 11.3426 11.3473C11.681 10.9223 11.7786 10.3365 11.4804 9.77184C11.1472 9.14096 10.6003 8.44963 9.71088 7.91872C8.82185 7.38805 7.61903 7.03456 6 7.03456ZM1.37995 10.2262C1.64331 9.72755 2.07467 9.17987 2.78782 8.75418C3.50135 8.32826 4.52536 8.00753 6 8.00753C7.47464 8.00753 8.49865 8.32826 9.21218 8.75418C9.92533 9.17987 10.3567 9.72755 10.6201 10.2262C10.7274 10.4294 10.6932 10.6009 10.5815 10.7412C10.4568 10.8977 10.218 11.0271 9.91842 11.0271H2.08158C1.78197 11.0271 1.54316 10.8977 1.4185 10.7412C1.30676 10.6009 1.27262 10.4294 1.37995 10.2262Z"
                      fill="#6D758F"
                    />
                  </g>
                </svg>
              </div>

              <span class="posters__name">{blog.posterName}</span>
            </div>

            <Link to={`/blog/${blog._id}`} class="primary__btn news--btn green">Read More</Link>
          </div>
          
        </div>))
}
      </div>
    </section>

  )
}
