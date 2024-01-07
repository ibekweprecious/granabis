import { useEffect, useReducer } from "react";
import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./products.css";
import axios from 'axios'
import { Link } from "react-router-dom";



const reducer = (state,action)=>{
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
const Products = () => {
    const [{loading,error,products},dispatch] = useReducer(reducer,{
        products:[],
         loading:true,
         error:'',
        })
       
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch({type:'FETCH_REQUEST'});
          try{
            const result = await axios.get('https://dygranabis.onrender.com/api/products')
          dispatch({type:'FETCH_SUCCESS',payload:result.data})
          }catch(err){
        dispatch({type:'FETCH_FAIL',payload:err.message})
          }
        
        } 
        fetchData()
          },[])
        
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Products</h3>
            <Link to={"/products"} className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </Link>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    products.map((product) => (
                      <Link  key={product._id} to={`/productUpdate/${product._id}`}>
                        <div className="grid-item">
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ product.image } />
                                </div>
                                <p className="text text-silver-v1">{ product.name.slice(0,20) }... <span> { product.rating }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ { product.price }</span>
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

export default Products
