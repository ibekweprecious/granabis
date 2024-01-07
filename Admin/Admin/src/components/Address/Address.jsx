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
      return {...state,address:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }
const Address = () => {
    const [{loading,error,address},dispatch] = useReducer(reducer,{
        address:[],
         loading:true,
         error:'',
        })
       
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get('https://dygranabis.onrender.com/api/address')
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
            <h3 className="grid-c-title-text">Address</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Address</h2>
            <span className="lg-value"></span>
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                {
                    address.map((address) => (
                        <Link key={address._id} to={`/addressupdate/${address._id}`}> <div className="grid-item">
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ address.address}</p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1"> { address.location } </span> - 
                                 <span className="text-silver-v1">  { address.email } </span>
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

export default Address
