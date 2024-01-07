import { useEffect, useReducer } from "react"
import { iconsImgs } from "../../utils/images"
import './blog.css'
import axios from "axios"
import { Link } from "react-router-dom"


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

const Blog = () => {
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
    <div style={{marginTop:"10px"}} className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Blog</h3>
            <Link to={"/blog"} className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </Link>
        </div>
        {
          blog.map((blog)=>(
            <Link to={blog._id} href={`/blogdelete/${blog._id}`}>
        <div className="grid-c8-content" style={{borderBottom:"1px solid"}} key={blog._id}>
          <div className="icon">
             <img src={ blog.image } />
          </div>
            <p className="text text-silver-v1">{blog.title}</p>
            {/* <p className="text text-silver-v1">{blog.subtitle.slice(0,65)}....</p> */}
        </div>
            </Link>
          ))
        }
    </div>
  )
}

export default Blog
