import React, { useContext } from 'react'
import bgImg from '../../assets/img/360_F_240187494_14XpmIch1dBAt6yucIzQvx2GDhF5DcV51.png'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet-async'
import { Store } from '../../../Store/Store'

export default function Index() {

  const {state,dispatch:ctxDispatch} = useContext(Store)
  const {cart,userInfo} = state

  return (
    <header class="main__header"  style={{ 
        background: ` url(${bgImg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"
     }}>
      <Helmet>Dygranabis</Helmet>
    <div class="header__text">
      <h2 class="heading__big--secondary h--white">Welcome to Dygranabis</h2>
      <p class="header--paragraph">
        Discover Nature Recipes: Your Source for Cannabis and Medicinal Plant
        Solutions
      </p>
      <form action="" class="header_form">
        <fieldset class="header__fieldset">
         <input
            type="search"
            name="search"
            id="search"
            placeholder={userInfo?  ( 
            `View Cart`
            ): ("Your cart is currently empty.") }
          />
          <Link to={userInfo?  "/cart" : '/login'}>
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
          </Link>
        </fieldset>

        <Link to="/home" class="header__btn primary__btn green">Home</Link>
        <Link to="/cart" class="header__btn primary__btn green">Cart</Link>
      </form>
    </div>
  </header>

  )
}
