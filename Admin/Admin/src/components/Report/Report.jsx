import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";
import { useEffect, useReducer } from "react";
import axios from "axios";

const reducerProduct = (state,action)=>{
    switch(action.type){
  case 'FETCH_REQUEST':
    return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,products:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }


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

const reducerUser = (state,action)=>{
    switch(action.type){
  case 'FETCH_REQUEST':
    return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,user:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }

const reducerBudget = (state,action)=>{
    switch(action.type){
  case 'FETCH_REQUEST':
    return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,budget:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }

const Report = () => {
    const [{loading,error,blog},dispatch1] = useReducer(reducer,{
        blog:[],
         loading:true,
         error:'',
        })
       
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch1({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get('https://dygranabis.onrender.com/api/blog')
          dispatch1({type:'FETCH_SUCCESS',payload:result.data})
          }catch(err){
        dispatch1({type:'FETCH_FAIL',payload:err.message})
          }
        
        } 
        fetchData()
          },[])

          const [{products},dispatch2] = useReducer(reducerProduct,{
            products:[],
            
            })
           
          useEffect(()=>{
            const fetchData = async()=>{
              dispatch2({type:'FETCH_REQUEST'});
              try{
                const result = await axios.get('https://dygranabis.onrender.com/api/products')
              dispatch2({type:'FETCH_SUCCESS',payload:result.data})
              }catch(err){
            dispatch2({type:'FETCH_FAIL',payload:err.message})
              }
            
            } 
            fetchData()
              },[])

          const [{user},dispatch3] = useReducer(reducerUser,{
            user:[],
            
            })
           
          useEffect(()=>{
            const fetchData = async()=>{
              dispatch3({type:'FETCH_REQUEST'});
              try{
                const result = await axios.get('https://dygranabis.onrender.com/api/users')
              dispatch3({type:'FETCH_SUCCESS',payload:result.data})
              }catch(err){
            dispatch3({type:'FETCH_FAIL',payload:err.message})
              }
            
            } 
            fetchData()
              },[])



              const [{budget},dispatch4] = useReducer(reducerBudget,{
                budget:[],
                 loading:true,
                 error:'',
                })
               
              useEffect(()=>{
                const fetchData = async()=>{
                  dispatch4({type:'FETCH_REQUEST'});
                  try{
                    const result = await axios.get('https://dygranabis.onrender.com/api/plan')
                  dispatch4({type:'FETCH_SUCCESS',payload:result.data})
                  }catch(err){
                dispatch4({type:'FETCH_FAIL',payload:err.message})
                  }
                
                } 
                fetchData()
                  },[])

  return (
    <div className="grid-one-item grid-common grid-c3">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Report</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c3-content">
            <div className="grid-chart">
                <div className="chart-vert-value">
                    <span>{blog?.length}</span>
                    <span>{products?.length}</span>
                    <span>{user?.length}</span>
                    <span>{budget?.length}</span>
                    
                </div>
                {
                    reportData.map((report) => (
                        <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper">
                                <div className="bar-item1" style={{ height: `${report.value1 !== null ? "40%" : ""}` }}></div>
                                <div className="bar-item2" style={{ height: `${report.value2 !== null ? "60%" : ""}` }}></div>
                            </div>
                            <span className="grid-hortz-value">{report.Item}</span>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Report
