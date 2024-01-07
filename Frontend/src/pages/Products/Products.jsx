import React, { useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Loader';

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


export default function Products() {
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
    <section class="product__section">
       <Helmet>
                <title>Products</title>
            </Helmet>
    <h3 class="heading__tetiary color--black align">Online services</h3>
    <h2 class="heading__secondary color--black align">Our Products</h2>

    <div class="product__container grid--3col wrapper">
{
  loading? <Loader/>
  :
  error? <div style={{color:"red"}}>{error}</div>
  :  
    products.map(product=>(<div>
     
             <div class="product__card" key={product.slug}>
             <div class="product__img">
          <img src={product.image} alt={product.name} />
        </div>

        <div class="product__information">
          <div class="product__details flex__align">
            <div class="product__names">
           
              <span class="names">{product.name}</span>
              
              <span class="names">{product.desc.slice(0, 20)}</span>
            </div>

            <span class="product__price"
              ><small>$</small>{product.price}.<small>00</small></span
            >
          </div>

          <div class="product__rating flex__align">
            <div class="rating__stars">
              <svg
                width="15"
                height="15"
                class="stars"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star 10">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M7.75816 11.1755L10.7136 13.0477C11.0914 13.2868 11.5602 12.931 11.4482 12.4899L10.5946 9.1313C10.5705 9.03775 10.5732 8.93929 10.6026 8.84725C10.6319 8.7552 10.6867 8.67331 10.7605 8.61099L13.4108 6.40552C13.7586 6.11583 13.5796 5.53787 13.1319 5.5088L9.67113 5.2838C9.57795 5.27719 9.48857 5.24425 9.41338 5.18882C9.3382 5.13338 9.2803 5.05774 9.24644 4.97068L7.9555 1.72037C7.92035 1.62799 7.85795 1.54849 7.77658 1.49239C7.69521 1.43629 7.59871 1.40625 7.49988 1.40625C7.40104 1.40625 7.30454 1.43629 7.22317 1.49239C7.1418 1.54849 7.0794 1.62799 7.04425 1.72037L5.75332 4.97068C5.71952 5.05782 5.66166 5.13357 5.58647 5.18909C5.51128 5.24461 5.42186 5.27762 5.32863 5.28427L1.86785 5.50927C1.42066 5.53787 1.24066 6.11583 1.58894 6.40552L4.23925 8.61146C4.31299 8.67374 4.36768 8.75555 4.39703 8.8475C4.42638 8.93945 4.42921 9.03782 4.40519 9.1313L3.61394 12.2461C3.47941 12.7754 4.04238 13.2024 4.49519 12.9151L7.24207 11.1755C7.31927 11.1264 7.40886 11.1004 7.50035 11.1004C7.59183 11.1004 7.68142 11.1264 7.75863 11.1755H7.75816Z"
                      fill="#228B22"
                    />
                  </g>
                </g>
              </svg>

              <svg
                width="15"
                height="15"
                class="stars"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star 10">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M7.75816 11.1755L10.7136 13.0477C11.0914 13.2868 11.5602 12.931 11.4482 12.4899L10.5946 9.1313C10.5705 9.03775 10.5732 8.93929 10.6026 8.84725C10.6319 8.7552 10.6867 8.67331 10.7605 8.61099L13.4108 6.40552C13.7586 6.11583 13.5796 5.53787 13.1319 5.5088L9.67113 5.2838C9.57795 5.27719 9.48857 5.24425 9.41338 5.18882C9.3382 5.13338 9.2803 5.05774 9.24644 4.97068L7.9555 1.72037C7.92035 1.62799 7.85795 1.54849 7.77658 1.49239C7.69521 1.43629 7.59871 1.40625 7.49988 1.40625C7.40104 1.40625 7.30454 1.43629 7.22317 1.49239C7.1418 1.54849 7.0794 1.62799 7.04425 1.72037L5.75332 4.97068C5.71952 5.05782 5.66166 5.13357 5.58647 5.18909C5.51128 5.24461 5.42186 5.27762 5.32863 5.28427L1.86785 5.50927C1.42066 5.53787 1.24066 6.11583 1.58894 6.40552L4.23925 8.61146C4.31299 8.67374 4.36768 8.75555 4.39703 8.8475C4.42638 8.93945 4.42921 9.03782 4.40519 9.1313L3.61394 12.2461C3.47941 12.7754 4.04238 13.2024 4.49519 12.9151L7.24207 11.1755C7.31927 11.1264 7.40886 11.1004 7.50035 11.1004C7.59183 11.1004 7.68142 11.1264 7.75863 11.1755H7.75816Z"
                      fill="#228B22"
                    />
                  </g>
                </g>
              </svg>

              <svg
                width="15"
                height="15"
                class="stars"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star 10">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M7.75816 11.1755L10.7136 13.0477C11.0914 13.2868 11.5602 12.931 11.4482 12.4899L10.5946 9.1313C10.5705 9.03775 10.5732 8.93929 10.6026 8.84725C10.6319 8.7552 10.6867 8.67331 10.7605 8.61099L13.4108 6.40552C13.7586 6.11583 13.5796 5.53787 13.1319 5.5088L9.67113 5.2838C9.57795 5.27719 9.48857 5.24425 9.41338 5.18882C9.3382 5.13338 9.2803 5.05774 9.24644 4.97068L7.9555 1.72037C7.92035 1.62799 7.85795 1.54849 7.77658 1.49239C7.69521 1.43629 7.59871 1.40625 7.49988 1.40625C7.40104 1.40625 7.30454 1.43629 7.22317 1.49239C7.1418 1.54849 7.0794 1.62799 7.04425 1.72037L5.75332 4.97068C5.71952 5.05782 5.66166 5.13357 5.58647 5.18909C5.51128 5.24461 5.42186 5.27762 5.32863 5.28427L1.86785 5.50927C1.42066 5.53787 1.24066 6.11583 1.58894 6.40552L4.23925 8.61146C4.31299 8.67374 4.36768 8.75555 4.39703 8.8475C4.42638 8.93945 4.42921 9.03782 4.40519 9.1313L3.61394 12.2461C3.47941 12.7754 4.04238 13.2024 4.49519 12.9151L7.24207 11.1755C7.31927 11.1264 7.40886 11.1004 7.50035 11.1004C7.59183 11.1004 7.68142 11.1264 7.75863 11.1755H7.75816Z"
                      fill="#228B22"
                    />
                  </g>
                </g>
              </svg>

              <svg
                width="15"
                height="15"
                class="stars"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star 10">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M7.75816 11.1755L10.7136 13.0477C11.0914 13.2868 11.5602 12.931 11.4482 12.4899L10.5946 9.1313C10.5705 9.03775 10.5732 8.93929 10.6026 8.84725C10.6319 8.7552 10.6867 8.67331 10.7605 8.61099L13.4108 6.40552C13.7586 6.11583 13.5796 5.53787 13.1319 5.5088L9.67113 5.2838C9.57795 5.27719 9.48857 5.24425 9.41338 5.18882C9.3382 5.13338 9.2803 5.05774 9.24644 4.97068L7.9555 1.72037C7.92035 1.62799 7.85795 1.54849 7.77658 1.49239C7.69521 1.43629 7.59871 1.40625 7.49988 1.40625C7.40104 1.40625 7.30454 1.43629 7.22317 1.49239C7.1418 1.54849 7.0794 1.62799 7.04425 1.72037L5.75332 4.97068C5.71952 5.05782 5.66166 5.13357 5.58647 5.18909C5.51128 5.24461 5.42186 5.27762 5.32863 5.28427L1.86785 5.50927C1.42066 5.53787 1.24066 6.11583 1.58894 6.40552L4.23925 8.61146C4.31299 8.67374 4.36768 8.75555 4.39703 8.8475C4.42638 8.93945 4.42921 9.03782 4.40519 9.1313L3.61394 12.2461C3.47941 12.7754 4.04238 13.2024 4.49519 12.9151L7.24207 11.1755C7.31927 11.1264 7.40886 11.1004 7.50035 11.1004C7.59183 11.1004 7.68142 11.1264 7.75863 11.1755H7.75816Z"
                      fill="#228B22"
                    />
                  </g>
                </g>
              </svg>

              <svg
                width="15"
                height="15"
                class="stars"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star 10">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M7.75816 11.1755L10.7136 13.0477C11.0914 13.2868 11.5602 12.931 11.4482 12.4899L10.5946 9.1313C10.5705 9.03775 10.5732 8.93929 10.6026 8.84725C10.6319 8.7552 10.6867 8.67331 10.7605 8.61099L13.4108 6.40552C13.7586 6.11583 13.5796 5.53787 13.1319 5.5088L9.67113 5.2838C9.57795 5.27719 9.48857 5.24425 9.41338 5.18882C9.3382 5.13338 9.2803 5.05774 9.24644 4.97068L7.9555 1.72037C7.92035 1.62799 7.85795 1.54849 7.77658 1.49239C7.69521 1.43629 7.59871 1.40625 7.49988 1.40625C7.40104 1.40625 7.30454 1.43629 7.22317 1.49239C7.1418 1.54849 7.0794 1.62799 7.04425 1.72037L5.75332 4.97068C5.71952 5.05782 5.66166 5.13357 5.58647 5.18909C5.51128 5.24461 5.42186 5.27762 5.32863 5.28427L1.86785 5.50927C1.42066 5.53787 1.24066 6.11583 1.58894 6.40552L4.23925 8.61146C4.31299 8.67374 4.36768 8.75555 4.39703 8.8475C4.42638 8.93945 4.42921 9.03782 4.40519 9.1313L3.61394 12.2461C3.47941 12.7754 4.04238 13.2024 4.49519 12.9151L7.24207 11.1755C7.31927 11.1264 7.40886 11.1004 7.50035 11.1004C7.59183 11.1004 7.68142 11.1264 7.75863 11.1755H7.75816Z"
                      fill="#228B22"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <span class="rating__count">({product.rating})</span>
          </div>

          <button class="add_to--cart flex__align--gap bg--green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 80h64l48 272h256"
              />
              <path
                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <Link to={`/product/${product.slug}`}><span style={{color:"#fff"}} class="cart--text">Add to Cart</span></Link>
          </button>
        </div>
             </div>
          
    </div>
    ))
}
    </div>

   
  </section>

  )
}
