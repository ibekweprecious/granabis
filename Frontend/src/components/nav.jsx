import React, { useContext, useState } from 'react'
import Logo from '../assets/logo/Dygranabis-Light-mode_075800.png'
import { Link, useParams } from 'react-router-dom'
import { Store } from '../../Store/Store'

function Nav() {
  const {state,dispatch: ctxDispatch} = useContext(Store)
  const {cart,userInfo} = state
  const [open,setOpen] = useState(false)

 const signoutHandler = () =>{
    ctxDispatch({type: 'USER_SIGNOUT'})
    localStorage.removeItem('userInfo')
  }

  return (
   <>
    <nav className={open? "navOpen wrapperOpen" : "nav wrapper"}>
      <div className={open? "displayNone" : "nav__logo"}>
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
      </div>
      <ul className={open? "nav-open" : "nav__list"}>
        <li className="nav_links"><Link onClick={(open)=>setOpen(false)}  to="/home" className="nav__link">Home</Link></li>
        <li className="nav_links">
          <Link onClick={(open)=>setOpen(false)} to="product" className="nav__link drop"
            >Products
          </Link>
        </li>
        <li className="nav_links"><Link to="/about" className="nav__link">About Us</Link></li>
        <li className="nav_links">
          <Link onClick={(open)=>setOpen(false)}   to="/gallery" className="nav__link drop"
            >Gallery
            <svg
              width="17"
              height="9"
              className="caret-down"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.845449 2.27367L7.35765 8.40279C7.9994 9.00679 9.00044 9.00679 9.64219 8.40279L16.1544 2.27367C16.4895 1.95824 16.5055 1.43084 16.1901 1.0957C15.8747 0.760551 15.3473 0.74457 15.0121 1.06L8.49992 7.18913L1.98773 1.06C1.65258 0.744568 1.12518 0.760549 0.809755 1.09569C0.494324 1.43084 0.510306 1.95823 0.845449 2.27367Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
        <li className="nav_links">
          <Link onClick={(open)=>setOpen(false)}  to="/investment" className="nav__link">Investments</Link>
        </li>
        <li className="nav_links">
          <Link onClick={(open)=>setOpen(false)}  to="/blog" className="nav__link drop"
            >Blog
            <svg
              width="17"
              height="9"
              className="caret-down"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.845449 2.27367L7.35765 8.40279C7.9994 9.00679 9.00044 9.00679 9.64219 8.40279L16.1544 2.27367C16.4895 1.95824 16.5055 1.43084 16.1901 1.0957C15.8747 0.760551 15.3473 0.74457 15.0121 1.06L8.49992 7.18913L1.98773 1.06C1.65258 0.744568 1.12518 0.760549 0.809755 1.09569C0.494324 1.43084 0.510306 1.95823 0.845449 2.27367Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
        <li className="nav_links">
          <Link  onClick={(open)=>setOpen(false)}  to="/contact" className="nav__link">Contact Us</Link>
        </li>
        <Link className="desktop" onClick={(open)=>setOpen(false)} to='/cart'>
      <svg  style={{margin:"10px 0"}}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {cart.cartItems.length > 0 && (
           <Link to='/cart' ><span>{cart.cartItems.reduce((a,c)=>a + c.quantity,0)}</span></Link>
          )}
    </Link>
        <div className="desktop">
        {/* {
          userInfo?.admin? (<span></span>) : (  <Link to="/admin.dygranabis.com" style={{fontSize:"14px"}} className="btn primary__btn green border">Admin</Link>)
          
        } */}
        <Link onClick={(open)=>setOpen(false)}  to="/register" style={{fontSize:"14px"}} className="btn primary__btn green border">Register</Link>
         {userInfo? (
           <Link to="#logout" style={{fontSize:"14px"}} onClick={signoutHandler}  className="btn primary__btn green border">Logout</Link>
           ):(
             <Link onClick={(open)=>setOpen(false)}  to="/login" style={{fontSize:"14px"}} className="btn primary__btn green border">Login</Link>
          )} 
   
      </div>

      </ul>

      <div className="nav__btn">
        {/* {
          userInfo?.admin? (<span></span>) : (  <Link to="/admin.dygranabis.com" style={{fontSize:"14px"}} className="btn primary__btn green border">Admin</Link>)
          
        } */}
        <Link to="/register" style={{fontSize:"14px"}} className="btn primary__btn green border">Register</Link>
         {userInfo? (
           <Link to="#logout" style={{fontSize:"14px"}} onClick={signoutHandler}  className="btn primary__btn green border">Logout</Link>
           ):(
             <Link to="/login" style={{fontSize:"14px"}} className="btn primary__btn green border">Login</Link>
          )} 
   
      </div>

{userInfo? 
<Link className='nav__btn' to='cart'>
      <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {cart.cartItems.length > 0 && (
           <Link to='/cart' ><span>{cart.cartItems.reduce((a,c)=>a + c.quantity,0)}</span></Link>
          )}
</Link>
: ""}
{
  open?  <i onClick={(open)=>setOpen(false)} style={{fontSize:"24px"}} class="fa fa-times" aria-hidden="true"></i>
  : 
      <div onClick={(open)=>setOpen(open)} className="hambugger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
     
}

    </nav>
   </>
  )
}

export default Nav