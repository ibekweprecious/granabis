import React, { useContext } from 'react'
import './cart.css'
import { Store } from '../../../Store/Store'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Cart() {
   const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/success';

  const navigate = useNavigate()
    const {state,dispatch:ctxDispatch} = useContext(Store)
    const {
        cart: {cartItems},
        userInfo
    } = state
     
    const updateCartHandler = async (item, quantity) => {
        ctxDispatch({
          type: 'CART_ADD_ITEM',
          payload: { ...item, quantity },
        });
      };
     
      const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
      };

      const checkoutHandler = () => {
        navigate('/shipping');
      };

  return (
    <div id="page">
       <Helmet>
                <title>Cart</title>
            </Helmet>
        {cartItems.length === 0? (
        <div style={{textAlign:"center"}} ><span className='heading__primary' style={{display:"block"}}>Cart is empty!</span> <span><Link to="/product" className='primary__btn green'>Go Shoping</Link></span></div>
        
        ):(
          <>
           <section className="bg__green">
      <svg width="1440" height="144" className="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 className="heading__secondary size--big about__header color--white align">
        Product details
      </h2>

      <svg width="96" height="53" className="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
    </section>


    <section className="cart__section">
      <h2 className="heading heading__secondary align">My Shopping Cart</h2>

      <div className="cart__container flex__align wrapper">
        <div className="container__one">
          <div className="product__table">


            <div className="table__header flex__align">
              <span className="item--header">Product</span>
              <span className="item--header mg--lft-1">Price</span>
              <span className="item--header mg--lft">Quantity</span>
              <span className="item--header">SumTotal</span>
            </div>

            {cartItems.map((item)=>( 
            <div className="table__row--1 flex__align">
              <div className="item__img--name flex__align">
                <img src={item.image} alt=""/>
                <span className="item--name">{item.name.slice(0, 15)}</span>
              </div>
               

              <span className="price--header">${item.price}</span>
              

              <div className="product__counter flip">
                <button className="add--btn decreament" onClick={()=> updateCartHandler(item,item.quantity -1)} disabled={item.quantity === 1}>-</button>
                <span className="amount--added">{item.quantity}</span>
                <button className="add--btn increament" onClick={()=> updateCartHandler(item,item.quantity +1)}>+</button>
              </div>

              <div className="sub--total flex__align">
              <span className="price--total">{item.price}</span>

              <svg onClick={()=>removeItemHandler(item)} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Close" clip-path="url(#clip0_338_115)">
                <path id="Vector" d="M11.4713 21.5148C17.1457 21.5148 21.7463 16.9142 21.7463 11.2398C21.7463 5.56548 17.1457 0.964844 11.4713 0.964844C5.79692 0.964844 1.19629 5.56548 1.19629 11.2398C1.19629 16.9142 5.79692 21.5148 11.4713 21.5148Z" stroke="#CCCCCC" stroke-width="0.934091" stroke-miterlimit="10"/>
                <path id="Vector_2" d="M15.2071 7.50391L7.73438 14.9766" stroke="#666666" stroke-width="1.40114" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M15.2071 14.9766L7.73438 7.50391" stroke="#666666" stroke-width="1.40114" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_338_115">
                <rect width="22.4182" height="22.4182" fill="white" transform="translate(0.262695 0.03125)"/>
                </clipPath>
                </defs>
                </svg>
                

              </div>
            </div>
            ))
}
          
            <div className="cart--btn flex__align">
              <Link to="/product" className="return__cart cart--cta">Return to shop</Link>
            </div>
          </div>


          
        </div>

        <div className="container__two">
          <span className="cart__total">Cart Total</span>

          <div className="total flex__align">
            <span className="service">Subtotal:</span>
            <span className="service--price">$({cartItems.reduce((a,c)=>a + c.quantity, 0)}{' '}
                 items) : $ 
                {cartItems.reduce((a,c)=> a + c.price * c.quantity, 0)}</span>
          </div>


          <div className="total flex__align">
            <span className="service">Shipping free:</span>
            <span className="service--price">free</span>
          </div>


          <div className="total flex__align">
            <span className="service">Total:</span>
            <span className="service--price">$({cartItems.reduce((a,c)=>a + c.quantity, 0)}{' '}
                 items) : $ 
                {cartItems.reduce((a,c)=> a + c.price * c.quantity, 0)}</span>
          </div>


      {userInfo?
           (<button onClick={checkoutHandler} className="add checkout--btn primary__btn green">
           Proceed to checkout
         </button>) :
          (
            <Link to="/login" className="add checkout--btn primary__btn green">
              Login
            </Link>) 
}
        </div>
      </div>
    </section>

  

    <section class="contact__field">
      <h2 class="heading__secondary color--white align">
        Do you have more questions?
      </h2>
      <p class="contact__instruction align color--white">
      Feel free to contact us for additional information or any inquiries. We are here to assist you and provide the information you need.
      </p>
      <div class="btn__container align">
        <Link href="#" class="primary__btn bg--white algin">Contact Us</Link>
      </div>
    </section>
        
          </>
        )}
     
    </div>

  )
}
