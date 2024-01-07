import axios from "axios";
import './productScreen.css';
import { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getError } from "../../../util/Util";
import { Store } from "../../../Store/Store";
import {Helmet} from 'react-helmet-async'
import Loader from "../../components/Loader";



const reducer = (state,action)=>{
    switch(action.type){
  case 'FETCH_REQUEST':
    return {...state,loading:true};
    case 'FETCH_SUCCESS':
      return {...state,product:action.payload,loading:false};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
        default:
          return state;
    }
  }

  const reducers = (state,action)=>{
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

export default function ProductScreen(){
  const params = useParams()
  const {slug} = params
  const navigate = useNavigate();

  const [{products},dispatchs] = useReducer(reducers,{
    products:[],
     loading:true,
     error:'',
    })
   
   
   
   useEffect(()=>{
   const fetchData = async()=>{
     dispatchs({type:'FETCH_REQUEST'});
     try{
       const result = await axios.get('https://dygranabis.onrender.com/api/products')
     dispatchs({type:'FETCH_SUCCESS',payload:result.data})
     }catch(err){
   dispatchs({type:'FETCH_FAIL',payload:err.message})
     }
   
   } 
   fetchData()
     },[])

    const [{loading,error,product},dispatch] = useReducer(reducer,{
        product:[],
         loading:true,
         error:'',
        })
       
         useEffect(()=>{
       const fetchData = async()=>{
         dispatch({type:'FETCH_REQUEST'});
         try{
           const result = await axios.get(`https://dygranabis.onrender.com/api/products/slug/${slug}`)
         dispatch({type:'FETCH_SUCCESS',payload:result.data})
         }catch(err){
       dispatch({type:'FETCH_FAIL',payload:getError(err)})
         }
        
       } 
       fetchData()
         },[slug])
    
         const {state,dispatch:ctxDispatch} = useContext(Store)
         const {cart} = state
        
    const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
   
         ctxDispatch({
           type:"CART_ADD_ITEM",
           payload: {...product, quantity},
          })
          navigate('/cart')
         }

         

    return(
        loading? <Loader/>
        : error ? <div style={{color:"red"}}>{error}</div>
        : 
       <>
        <section class="bg__green mb-100">
  <Helmet>
      <title>{product.name}</title>
  </Helmet>
 
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Product Details
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
    </section>

   
    <section className="product__description--page wrapper">
      <div className="product__description--details flex__align">
        <div className="product__description--img">
          <img src={product.image} alt=""/>
        </div>
        <div className="product__description--text">
          <div className="text__header">
            <div className="flex__align product--header">

              <h2 className="heading__small small--heading">{product.name}</h2>
              <span className="stock--indicator">In Stock</span>
            </div>

            <div className="product__rates flex__align">
              <div className="rating--stars">
                <svg width="18" height="17" className="stars--2" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Star 2">
                  <g id="Group">
                  <path id="star--2" d="M9.10845 12.5873L12.369 14.6527C12.7858 14.9165 13.3029 14.524 13.1793 14.0373L12.2376 10.332C12.211 10.2288 12.2141 10.1202 12.2465 10.0187C12.2789 9.91712 12.3393 9.82678 12.4207 9.75803L15.3446 7.3249C15.7283 7.00531 15.5308 6.36768 15.0369 6.33561L11.2189 6.08739C11.1161 6.08009 11.0175 6.04376 10.9345 5.9826C10.8516 5.92144 10.7877 5.83798 10.7504 5.74194L9.32616 2.15611C9.28738 2.0542 9.21854 1.96649 9.12877 1.9046C9.039 1.84271 8.93254 1.80957 8.8235 1.80957C8.71447 1.80957 8.608 1.84271 8.51823 1.9046C8.42846 1.96649 8.35963 2.0542 8.32085 2.15611L6.89665 5.74194C6.85937 5.83808 6.79553 5.92165 6.71258 5.9829C6.62963 6.04415 6.53098 6.08057 6.42812 6.0879L2.6101 6.33613C2.11675 6.36768 1.91817 7.00531 2.3024 7.3249L5.2263 9.75854C5.30765 9.82725 5.36798 9.91751 5.40036 10.019C5.43274 10.1204 5.43586 10.2289 5.40936 10.332L4.53644 13.7684C4.38802 14.3523 5.0091 14.8234 5.50865 14.5064L8.53908 12.5873C8.62425 12.5331 8.72309 12.5044 8.82402 12.5044C8.92495 12.5044 9.02379 12.5331 9.10896 12.5873H9.10845Z" fill="#FF8A00"/>
                  </g>
                  </g>
                  </svg>

                  
                  <svg width="18" height="17" className="stars--2" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Star 2">
                    <g id="Group">
                    <path id="star--2" d="M9.10845 12.5873L12.369 14.6527C12.7858 14.9165 13.3029 14.524 13.1793 14.0373L12.2376 10.332C12.211 10.2288 12.2141 10.1202 12.2465 10.0187C12.2789 9.91712 12.3393 9.82678 12.4207 9.75803L15.3446 7.3249C15.7283 7.00531 15.5308 6.36768 15.0369 6.33561L11.2189 6.08739C11.1161 6.08009 11.0175 6.04376 10.9345 5.9826C10.8516 5.92144 10.7877 5.83798 10.7504 5.74194L9.32616 2.15611C9.28738 2.0542 9.21854 1.96649 9.12877 1.9046C9.039 1.84271 8.93254 1.80957 8.8235 1.80957C8.71447 1.80957 8.608 1.84271 8.51823 1.9046C8.42846 1.96649 8.35963 2.0542 8.32085 2.15611L6.89665 5.74194C6.85937 5.83808 6.79553 5.92165 6.71258 5.9829C6.62963 6.04415 6.53098 6.08057 6.42812 6.0879L2.6101 6.33613C2.11675 6.36768 1.91817 7.00531 2.3024 7.3249L5.2263 9.75854C5.30765 9.82725 5.36798 9.91751 5.40036 10.019C5.43274 10.1204 5.43586 10.2289 5.40936 10.332L4.53644 13.7684C4.38802 14.3523 5.0091 14.8234 5.50865 14.5064L8.53908 12.5873C8.62425 12.5331 8.72309 12.5044 8.82402 12.5044C8.92495 12.5044 9.02379 12.5331 9.10896 12.5873H9.10845Z" fill="#FF8A00"/>
                    </g>
                    </g>
                    </svg>

                    


                    <svg width="18" height="17" className="stars--2" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Star 2">
                      <g id="Group">
                      <path id="star--2" d="M9.10845 12.5873L12.369 14.6527C12.7858 14.9165 13.3029 14.524 13.1793 14.0373L12.2376 10.332C12.211 10.2288 12.2141 10.1202 12.2465 10.0187C12.2789 9.91712 12.3393 9.82678 12.4207 9.75803L15.3446 7.3249C15.7283 7.00531 15.5308 6.36768 15.0369 6.33561L11.2189 6.08739C11.1161 6.08009 11.0175 6.04376 10.9345 5.9826C10.8516 5.92144 10.7877 5.83798 10.7504 5.74194L9.32616 2.15611C9.28738 2.0542 9.21854 1.96649 9.12877 1.9046C9.039 1.84271 8.93254 1.80957 8.8235 1.80957C8.71447 1.80957 8.608 1.84271 8.51823 1.9046C8.42846 1.96649 8.35963 2.0542 8.32085 2.15611L6.89665 5.74194C6.85937 5.83808 6.79553 5.92165 6.71258 5.9829C6.62963 6.04415 6.53098 6.08057 6.42812 6.0879L2.6101 6.33613C2.11675 6.36768 1.91817 7.00531 2.3024 7.3249L5.2263 9.75854C5.30765 9.82725 5.36798 9.91751 5.40036 10.019C5.43274 10.1204 5.43586 10.2289 5.40936 10.332L4.53644 13.7684C4.38802 14.3523 5.0091 14.8234 5.50865 14.5064L8.53908 12.5873C8.62425 12.5331 8.72309 12.5044 8.82402 12.5044C8.92495 12.5044 9.02379 12.5331 9.10896 12.5873H9.10845Z" fill="#FF8A00"/>
                      </g>
                      </g>
                      </svg>

                      
                      <svg width="18" height="17" className="stars--2" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Star 2">
                        <g id="Group">
                        <path id="star--2" d="M9.10845 12.5873L12.369 14.6527C12.7858 14.9165 13.3029 14.524 13.1793 14.0373L12.2376 10.332C12.211 10.2288 12.2141 10.1202 12.2465 10.0187C12.2789 9.91712 12.3393 9.82678 12.4207 9.75803L15.3446 7.3249C15.7283 7.00531 15.5308 6.36768 15.0369 6.33561L11.2189 6.08739C11.1161 6.08009 11.0175 6.04376 10.9345 5.9826C10.8516 5.92144 10.7877 5.83798 10.7504 5.74194L9.32616 2.15611C9.28738 2.0542 9.21854 1.96649 9.12877 1.9046C9.039 1.84271 8.93254 1.80957 8.8235 1.80957C8.71447 1.80957 8.608 1.84271 8.51823 1.9046C8.42846 1.96649 8.35963 2.0542 8.32085 2.15611L6.89665 5.74194C6.85937 5.83808 6.79553 5.92165 6.71258 5.9829C6.62963 6.04415 6.53098 6.08057 6.42812 6.0879L2.6101 6.33613C2.11675 6.36768 1.91817 7.00531 2.3024 7.3249L5.2263 9.75854C5.30765 9.82725 5.36798 9.91751 5.40036 10.019C5.43274 10.1204 5.43586 10.2289 5.40936 10.332L4.53644 13.7684C4.38802 14.3523 5.0091 14.8234 5.50865 14.5064L8.53908 12.5873C8.62425 12.5331 8.72309 12.5044 8.82402 12.5044C8.92495 12.5044 9.02379 12.5331 9.10896 12.5873H9.10845Z" fill="#FF8A00"/>
                        </g>
                        </g>
                        </svg>

                        


                        
              </div>

             <div className="">
              <small className="news__date">{product.rating} Reviews</small>
              <small className="news__date dot">.</small>
            

            </div>

            <div className="product__discription--pricing">
              <span className="unslashed">{product.price}</span>
              {/* <span className="discount">64% Off</span> */}
            </div>
          </div>


          <p className="product__overview">
           {product.desc}
           </p>
          <div className="add__tocart--box flex__align">
          
            <button className="add primary__btn green" onClick={addToCartHandler} >Add to Cart
              <svg width="16" height="16" className="bag" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Rectangle" d="M5.29842 6.85509H3.00003L1.46777 15.2825H15.2581L13.7258 6.85509H11.4275M5.29842 6.85509V4.55671C5.29842 2.86422 6.67045 1.49219 8.36294 1.49219V1.49219C10.0554 1.49219 11.4275 2.86422 11.4275 4.5567V6.85509M5.29842 6.85509H11.4275M5.29842 6.85509V9.15348M11.4275 6.85509V9.15348" stroke="white" stroke-width="1.19516" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </button>
          </div>


          <span className="news__date categories"><b>Category:</b> Cannabis </span><br/>
          <span className="news__date"><b>Tag:</b> {product.name}</span>
        </div>
        </div>
      </div>
    </section>

    <section className="other__product--details">
      <div className="detail__description--page grid--3col  wrapper " id="related">
        <div className="detail__description--text">
          <h4 className="heading__tetiary">{product.name}</h4>
          <p className="product__overview descrip">
           {product.desc}
          </p>

        </div>
        <div className="detail__description--img">
          <img src={product.image} alt="" />
        </div>
      </div>
    </section>

    <section className="product__section">
      <h2 className="heading__secondary color--black align">Related Products</h2>

      <div className="product__container grid--3col wrapper">
       {
        products.map(products=>(
        <div key={products._id} className="product__card">
          <div className="product__img">
            <img src={products.image} alt="" />
          </div>

          <div className="product__information">
            <div className="product__details flex__align">
              <div className="product__names">
                <span className="names">{products.name}</span>
                <span className="names">{products.desc.slice(0,30)}</span>
              </div>

              <span className="product__price"
                ><small>$</small>{products.price}<small>00</small></span
              >
            </div>

            <div className="product__rating flex__align">
              <div className="rating__stars">
                <svg
                  width="15"
                  height="15"
                  className="stars"
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
                  className="stars"
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
                  className="stars"
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
                  className="stars"
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
                  className="stars"
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
              <span className="rating__count">({products.rating})</span>
            </div>

            <button className="add_to--cart flex__align--gap bg--green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
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
        ))
       }
      </div> 
    </section>
 
 
</>
          
    )
}
