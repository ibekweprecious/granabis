import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const reducer = (state,action)=>{
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
const Budget = () => {
    const [{loading,error,budget},dispatch] = useReducer(reducer,{
        budget:[],
         loading:true,
         error:'',
        })
       
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get('https://dygranabis.onrender.com/api/plan')
          dispatch({type:'FETCH_SUCCESS',payload:result.data})
          }catch(err){
        dispatch({type:'FETCH_FAIL',payload:err.message})
          }
        
        } 
        fetchData()
          },[])
  return (
    <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Investment</h3>
            <Link to={"/investment"} className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </Link>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Plan</h2>
            <span className="lg-value"></span>
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                {
                    budget.map((budget) => (
                        <Link key={budget._id} to={`/update/${budget._id}`}>                        <div className="grid-item" key = { budget._id }>
                            <div  className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ budget.plan } <span>{ budget.type }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ { budget.price1 } </span> - 
                                 <span className="text-silver-v1"> $ { budget.price2 } </span>
                            </div>
                        </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Budget
