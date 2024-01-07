import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state,action)=>{
    switch(action.type){
  case 'FETCH_REQUEST':
    return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,contact:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }
const ContactUs = () => {
    const [{loading,error,contact},dispatch] = useReducer(reducer,{
        contact:[],
         loading:true,
         error:'',
        })
       
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get('https://dygranabis.onrender.com/api/contact')
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
            <h3 className="grid-c-title-text">Complains</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Complain</h2>
            <span className="lg-value"></span>
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                {
                    contact.map((contact) => (
                        <a key={contact._id} href={`/update/${contact._id}`}> <div className="grid-item" key = { contact._id }>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ contact.name }</p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1"> { contact.email } </span> - 
                                 <span className="text-silver-v1">  { contact.text } </span>
                            </div>
                        </div>
                        </a>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ContactUs
