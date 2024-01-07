import React, { useContext, useEffect, useReducer, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/img/360_F_240187494_14XpmIch1dBAt6yucIzQvx2GDhF5DcV5.jpg'
import aboutImg1 from '../../assets/img/3711e72b-c694-4ece-a82a-8feb88a46554.jpeg'
import ServiceImg from '../../assets/img/surat-jalan-01-1-4 1.png'
import faqImg from '../../assets/img/FAQs-amico1.png'
import customerRev1 from '../../assets/img/image-anne.jpg'
import customerRev2 from '../../assets/img/image-colton.jpg'
import customerRev3 from '../../assets/img/image-irene.jpg'
import { Store } from '../../../Store/Store'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet-async'
import Loader from '../../components/Loader'

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

const reducers = (state,action)=>{
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


function Home() {
const [open1,setOpen1] = useState(false)
const [open2,setOpen2] = useState(false)
const [open3,setOpen3] = useState(false)
const [open4,setOpen4] = useState(false)
const [open5,setOpen5] = useState(false)
const [open6,setOpen6] = useState(false)


  const [{loadin,erro,blog},dispatchs] = useReducer(reducers,{
    blog:[],
     loadin:true,
     erro:'',
    })
   
  useEffect(()=>{
    const fetchData = async()=>{
      dispatchs({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('https://dygranabis.onrender.com/api/blog')
      dispatchs({type:'FETCH_SUCCESS',payload:result.data})
      }catch(err){
    dispatchs({type:'FETCH_FAIL',payload:err.message})
      }
    
    } 
    fetchData()
      },[])

      console.log(blog)

    const [{loading,error,products},dispatch] = useReducer(reducer,{
      products:[],
       loading:true,
       error:'',
      })
     
      const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 940px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
      
      const Bg = {
        backgroundImage: `linear-gradient(90deg, #F1F2F6 45%, rgba(232, 231, 226, 0) 58%), url(${bgImg})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"right",
      };
      const BgMobile = {
        backgroundImage: `linear-gradient(155deg, #F1F2F6 63%, rgba(232, 231, 226, 0) 85%), url(${bgImg})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"right",
      };


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
    <>
     <Helmet>
                <title>Home</title>
            </Helmet>
    <div className="hero__section" style={isPortrait ? BgMobile : Bg}>
      <div className="hero__contianer wrapper">
        <div className="hero__text">
          <h1 className="heading__primary">
            Discover Your Source for Cannabis and Medicinal Plant Solutions
          </h1>

          <p className="hero__text--paragraph">
          Welcome to Dygranabis, your gateway to premium cannabis. With a focus on innovation and sustainability, we're redefining your cannabis experience. Embrace a greener, healthier future with us.
          </p>

          <Link to="/product" className="primary__btn green hero-btn">Discover more</Link>
        </div>
      </div>
    </div>


    <section className="features__section">
      <div className="features__container grid--3col">
        <div className="shipping flex__align commodities">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="delivery-truck 1">
              <path
                id="Vector"
                d="M32.7021 26.3041C31.7247 26.3041 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.859 30.0957 32.5595C30.8043 33.2518 31.7247 33.6346 32.7021 33.6346C34.7058 33.6346 36.3348 31.9893 36.3348 29.9694C36.3348 27.9494 34.7058 26.3041 32.7021 26.3041ZM32.7021 32.0056C31.5781 32.0056 30.6333 31.0771 30.6333 29.9694C30.6333 28.8617 31.5781 27.9331 32.7021 27.9331C33.8098 27.9331 34.7058 28.8454 34.7058 29.9694C34.7058 31.0934 33.8098 32.0056 32.7021 32.0056ZM33.6469 14.0948C33.5003 13.9564 33.3048 13.883 33.1012 13.883H28.9228C28.4749 13.883 28.1083 14.2496 28.1083 14.6975V21.3764C28.1083 21.8244 28.4749 22.1909 28.9228 22.1909H35.5528C36.0008 22.1909 36.3673 21.8244 36.3673 21.3764V16.9048C36.3673 16.6768 36.2696 16.4569 36.0986 16.3021L33.6469 14.0948ZM34.7383 20.5619H29.7373V15.5039H32.7835L34.7383 17.2632V20.5619ZM12.8121 26.3041C11.8347 26.3041 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.859 10.2057 32.5595C10.9143 33.2518 11.8347 33.6346 12.8121 33.6346C14.8157 33.6346 16.4447 31.9893 16.4447 29.9694C16.4447 27.9494 14.8157 26.3041 12.8121 26.3041ZM12.8121 32.0056C11.688 32.0056 10.7432 31.0771 10.7432 29.9694C10.7432 28.8617 11.688 27.9331 12.8121 27.9331C13.9198 27.9331 14.8157 28.8454 14.8157 29.9694C14.8157 31.0934 13.9198 32.0056 12.8121 32.0056ZM7.37935 27.306H5.74221V25.1394C5.74221 24.6914 5.37569 24.3249 4.92771 24.3249C4.47974 24.3249 4.11322 24.6914 4.11322 25.1394V28.1205C4.11322 28.5684 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5684 8.19385 28.1205C8.19385 27.6725 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.3149 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9266L12.3478 19.9836C12.7958 19.9836 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3546 12.3641 18.3546L2.48422 18.2976C2.47607 18.2976 2.47607 18.2976 2.47607 18.2976C2.0281 18.2976 1.66158 18.656 1.66158 19.104C1.65343 19.5601 2.01996 19.9266 2.46793 19.9266ZM4.12951 16.2288H14.0094C14.4573 16.2288 14.8239 15.8623 14.8239 15.4143C14.8239 14.9663 14.4573 14.5998 14.0094 14.5998H4.12951C3.68153 14.5998 3.31501 14.9663 3.31501 15.4143C3.31501 15.8623 3.68153 16.2288 4.12951 16.2288ZM39.6986 15.1292L33.8668 10.2993C33.7202 10.1771 33.541 10.1119 33.3456 10.1119H26.4875V7.17973C26.4875 6.73176 26.121 6.36523 25.673 6.36523H4.92771C4.47974 6.36523 4.11322 6.73176 4.11322 7.17973V13.1419C4.11322 13.5898 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5898 5.74221 13.1419V7.99423H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6725 17.3732 28.1205C17.3732 28.5684 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5684 28.9473 28.1205C28.9473 27.6725 28.5807 27.306 28.1328 27.306H26.4956V11.7409H33.0605L38.371 16.1392L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6562 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5603 39.9348 28.1123L40 15.7645C39.9919 15.5202 39.886 15.284 39.6986 15.1292Z"
                fill="#228B22"
              />
            </g>
          </svg>

          <div className="feature__details">
            <h4 className="feature--header">Free Shipping</h4>
            <span className="feature--desc">Free shipping on all your order</span>
          </div>
        </div>
        <div className="support flex__align commodities">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="headphones 1" clip-path="url(#clip0_103_6128)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M34.0182 15.2101V13.6723C34.0182 9.9916 32.7157 6.57143 30.3543 4.03361C27.9342 1.42857 24.6064 0 20.9762 0H19.7073C16.077 0 12.7493 1.42857 10.3291 4.03361C7.96778 6.57143 6.66526 9.9916 6.66526 13.6723V15.2101C3.79971 15.4034 1.5224 17.7899 1.5224 20.7059V23.1092C1.5224 26.1429 3.99299 28.6134 7.0266 28.6134H10.1274C10.6821 28.6134 11.1358 28.1597 11.1358 27.605V16.2017C11.1358 15.6471 10.6821 15.1933 10.1274 15.1933H8.68206V13.6723C8.68206 7.02521 13.4216 2.01681 19.6989 2.01681H20.9678C27.2535 2.01681 31.9846 7.02521 31.9846 13.6723V15.1933H30.5392C29.9846 15.1933 29.5308 15.6471 29.5308 16.2017V27.5966C29.5308 28.1513 29.9846 28.605 30.5392 28.605H31.951C31.5392 33.8655 27.9174 35.084 26.2367 35.3613C25.7745 33.9412 24.4384 32.916 22.8669 32.916H20.3459C18.3964 32.916 16.8081 34.5042 16.8081 36.4538C16.8081 38.4034 18.3964 40 20.3459 40H22.8753C24.5056 40 25.8753 38.8908 26.2871 37.395C27.1106 37.2773 28.4132 36.9832 29.7073 36.2269C31.5308 35.1597 33.6905 32.9832 33.9762 28.5966C36.8585 28.4202 39.1443 26.0252 39.1443 23.1008V20.6975C39.1527 17.7899 36.8838 15.395 34.0182 15.2101ZM9.13585 26.5882H7.04341C5.11904 26.5882 3.55601 25.0252 3.55601 23.1008V20.6975C3.55601 18.7731 5.11904 17.2101 7.04341 17.2101H9.13585V26.5882ZM22.8753 37.9832H20.3459C19.5056 37.9832 18.8249 37.3025 18.8249 36.4622C18.8249 35.6218 19.5056 34.9412 20.3459 34.9412H22.8753C23.7157 34.9412 24.3964 35.6218 24.3964 36.4622C24.3964 37.3025 23.7157 37.9832 22.8753 37.9832ZM37.1359 23.1008C37.1359 25.0252 35.5728 26.5882 33.6485 26.5882H31.556V17.2101H33.6485C35.5728 17.2101 37.1359 18.7731 37.1359 20.6975V23.1008Z"
                  fill="#228B22"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_103_6128">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.333374)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="feature__details">
            <h4 className="feature--header">Customer Support 24/7</h4>
            <span className="feature--desc">Instant access to Support</span>
          </div>
        </div>
        <div className="secure flex__align commodities">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="shopping-bag" clip-path="url(#clip0_103_6159)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M36.6468 34.6678L34.345 8.72697C34.3036 8.21362 33.873 7.82447 33.3514 7.82447H28.4994C28.4911 3.51066 24.9805 0 20.6667 0C16.3528 0 12.8422 3.51066 12.8339 7.82447H7.98191C7.46856 7.82447 7.038 8.21362 6.98832 8.72697L4.68652 34.6678C4.68652 34.7009 4.68652 34.7257 4.68652 34.7589C4.68652 37.6485 7.34436 40 10.6066 40H30.7267C33.9889 40 36.6468 37.6485 36.6468 34.7589C36.6468 34.7257 36.6468 34.7009 36.6468 34.6678ZM20.6667 1.98717C23.8875 1.98717 26.504 4.6036 26.5122 7.82447H14.8211C14.8294 4.6036 17.4458 1.98717 20.6667 1.98717ZM30.7267 38.0046H10.6066C8.45386 38.0046 6.69853 36.5721 6.67369 34.792L8.89269 9.81163H12.8339V13.2975C12.8339 13.8439 13.281 14.291 13.8275 14.291C14.374 14.291 14.8211 13.8439 14.8211 13.2975V9.81163H26.5122V13.2975C26.5122 13.8439 26.9593 14.291 27.5058 14.291C28.0523 14.291 28.4994 13.8439 28.4994 13.2975V9.81163H32.4406L34.6596 34.8002C34.6348 36.5721 32.8794 38.0046 30.7267 38.0046Z"
                    fill="#228B22"
                  />
                  <path
                    id="Vector_2"
                    d="M24.7983 20.6831L18.9361 26.5453L16.5432 24.1524C16.1541 23.7632 15.5248 23.7632 15.1357 24.1524C14.7465 24.5415 14.7465 25.1708 15.1357 25.56L18.2323 28.6566C18.4228 28.8471 18.6795 28.9464 18.9361 28.9464C19.1928 28.9464 19.4412 28.8471 19.6399 28.6566L26.2058 22.0907C26.595 21.7015 26.595 21.0723 26.2058 20.6831C25.8167 20.3022 25.1874 20.3022 24.7983 20.6831Z"
                    fill="#228B22"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_103_6159">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.666687)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="feature__details">
            <h4 className="feature--header">100% Secure Payment</h4>
            <span className="feature--desc">We ensure your money is save</span>
          </div>
        </div>
        <div className="gurantee flex__align commodities">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="package" clip-path="url(#clip0_103_6187)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M38.3959 9.43014C38.3959 9.27818 38.3621 9.12621 38.2946 8.98269C38.1595 8.69565 37.8978 8.50148 37.6108 8.44238L20.4136 0.101309C20.135 -0.0337695 19.8058 -0.0337695 19.5272 0.101309L2.16121 8.51836C1.82351 8.67877 1.60401 9.01646 1.58713 9.39637V9.40481C1.58713 9.41325 1.58713 9.4217 1.58713 9.43858V30.5614C1.58713 30.9498 1.80663 31.3043 2.16121 31.4732L19.5272 39.8903C19.5356 39.8903 19.5356 39.8903 19.5441 39.8987C19.5694 39.9071 19.5947 39.9156 19.6201 39.9325C19.6285 39.9325 19.6369 39.9409 19.6538 39.9409C19.6791 39.9493 19.7045 39.9578 19.7298 39.9662C19.7382 39.9662 19.7467 39.9747 19.7551 39.9747C19.7805 39.9831 19.8142 39.9831 19.8396 39.9916C19.848 39.9916 19.8564 39.9916 19.8649 39.9916C19.8987 39.9916 19.9409 40 19.9746 40C20.0084 40 20.0506 40 20.0844 39.9916C20.0928 39.9916 20.1013 39.9916 20.1097 39.9916C20.135 39.9916 20.1688 39.9831 20.1941 39.9747C20.2026 39.9747 20.211 39.9662 20.2195 39.9662C20.2448 39.9578 20.2701 39.9493 20.2954 39.9409C20.3039 39.9409 20.3123 39.9325 20.3292 39.9325C20.3545 39.924 20.3799 39.9156 20.4052 39.8987C20.4136 39.8987 20.4136 39.8987 20.4221 39.8903L37.8387 31.4479C38.1848 31.279 38.4128 30.9244 38.4128 30.5361V9.45547C38.3959 9.44702 38.3959 9.43858 38.3959 9.43014ZM19.9662 2.13592L35.0274 9.43858L29.4808 12.1317L14.4195 4.82904L19.9662 2.13592ZM19.9662 16.7412L4.90498 9.43858L12.0979 5.95188L27.1591 13.2545L19.9662 16.7412ZM3.6133 11.068L18.9531 18.5057V37.3575L3.6133 29.9198V11.068ZM20.9793 37.3575V18.5057L28.1806 15.0106V19.9409C28.1806 20.4981 28.6365 20.954 29.1937 20.954C29.7509 20.954 30.2068 20.4981 30.2068 19.9409V14.0228L36.3697 11.0342V29.886L20.9793 37.3575Z"
                  fill="#228B22"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_103_6187">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="feature__details">
            <h4 className="feature--header">Money-Back Guarantee</h4>
            <span className="feature--desc">30 Days Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>

    <section className="about__section">
      <div className="about__us flex__align">
        <div className="description__img">
          <img src={aboutImg1} alt="" />
        </div>

        <div className="discription__text">
          <h4 className="heading__tetiary color--green">
            ABOUT US
            <svg
              width="107"
              height="6"
              viewBox="0 0 107 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 973"
                d="M107 2.19629C107.276 2.19629 107.5 2.42015 107.5 2.69629C107.5 2.97243 107.276 3.19629 107 3.19629V2.19629ZM5.66666 2.69629C5.66666 4.16905 4.47276 5.36296 3 5.36296C1.52724 5.36296 0.333336 4.16905 0.333336 2.69629C0.333336 1.22353 1.52724 0.0296223 3 0.0296223C4.47276 0.0296223 5.66666 1.22353 5.66666 2.69629ZM107 3.19629H3V2.19629H107V3.19629Z"
                fill="url(#paint0_linear_103_5975)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_5975"
                  x1="27.5"
                  y1="2.19617"
                  x2="99"
                  y2="3.19617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.365728" stop-color="#056333" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </h4>
          <h2 className="heading__secondary about__header color--black">
            Who We Are
          </h2>
          <p className="about__desc">
          Dygranabis stands out in the cannabis industry, committed to excellence and innovation. We cultivate a diverse range of premium cannabis products with precision and passion
          </p>
          <p className="about__desc">
          Our cutting-edge techniques and exploration of new strains redefine the cannabis experience, setting the standard for quality and potency. 
          </p>

          <p className="about__desc">

          Join us on a journey where premium cannabis meets integrity and innovation – welcome to Dygranabis.
          </p>

          <Link to="/about" className="primary__btn green about__desc--btn"
            >Learn more about Dygranabis &rarr;</Link>
        </div>
      </div>
    </section>

    <section className="vision__section">
      <div className="vision flex__align flex__alignRev">
        <div className="vision__img">
          <img
            src={ServiceImg}
            alt=""
          />
        </div>

        <div className="discription__text vision--text">
          <h4 className="heading__tetiary color--green">
            Our Services
            <svg
              width="107"
              height="6"
              viewBox="0 0 107 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 973"
                d="M107 2.19629C107.276 2.19629 107.5 2.42015 107.5 2.69629C107.5 2.97243 107.276 3.19629 107 3.19629V2.19629ZM5.66666 2.69629C5.66666 4.16905 4.47276 5.36296 3 5.36296C1.52724 5.36296 0.333336 4.16905 0.333336 2.69629C0.333336 1.22353 1.52724 0.0296223 3 0.0296223C4.47276 0.0296223 5.66666 1.22353 5.66666 2.69629ZM107 3.19629H3V2.19629H107V3.19629Z"
                fill="url(#paint0_linear_103_5975)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_5975"
                  x1="27.5"
                  y1="2.19617"
                  x2="99"
                  y2="3.19617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.365728" stop-color="#056333" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </h4>
          <h2 className="heading__secondary about__header color--black">
            Delivery Service
          </h2>
          <p className="vision__desc">
          Dygranabis Logistics excels in providing seamless solutions for the transportation and distribution of cannabis products.
          </p>
          <p className="vision__desc">
          Our dedicated team ensures efficient and secure handling from cultivation facilities to your doorstep.
          </p>

          <p className="vision__desc">

          With a commitment to reliability, our logistics services prioritize timely deliveries and accurate tracking, giving you peace of mind throughout the supply chain.
          </p>
        </div>
      </div>
    </section>

    <section className="product__section">
      <div className="section--header">

        <h3 className="heading__tetiary color--black align">Online services</h3>
        <h2 className="heading__secondary color--black align">Our Products</h2>
      </div>

      <div class="product__container grid--3col wrapper">
{
  loading? <div>Loading</div>
  :
  error? <div>{error}</div>
  :  
    products.map(product=>(<div>

             <div class="product__card" key={product.slug}>
             <div class="product__img">
          <img src={product.image} alt={product.name} />
        </div>

        <div class="product__information">
          <div class="product__details flex__align">
            <div class="product__names">
            
              <span class="names">{product.name.slice(0, 10)}</span>
            
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
            
    </div>))
}
    </div>

      <div className="product_btn-container align">
        <Link to="/product" className="primary__btn product--btn bg--white align"
          >All Products</Link
        >
      </div>
    </section>

<section class="faq__section wrapper" id="faq">
<div class="faq__header--text">
  <h3 class="heading__tetiary-green">
    FAQs
    <svg
      width="107"
      height="6"
      viewBox="0 0 107 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 973"
        d="M107 2.19629C107.276 2.19629 107.5 2.42015 107.5 2.69629C107.5 2.97243 107.276 3.19629 107 3.19629V2.19629ZM5.66666 2.69629C5.66666 4.16905 4.47276 5.36296 3 5.36296C1.52724 5.36296 0.333336 4.16905 0.333336 2.69629C0.333336 1.22353 1.52724 0.0296223 3 0.0296223C4.47276 0.0296223 5.66666 1.22353 5.66666 2.69629ZM107 3.19629H3V2.19629H107V3.19629Z"
        fill="url(#paint0_linear_103_5975)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_5975"
          x1="27.5"
          y1="2.19617"
          x2="99"
          y2="3.19617"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.365728" stop-color="#056333" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  </h3>

  <h2 class="heading__secondary color--black">
    Frequently Asked Questions
  </h2>
</div>
<div class="faq flex__align">
  <div class="faq__img">
    <div class="faq__illustrator">
      <img src={faqImg} alt="faq illustrator" />
    </div>
  </div>

  <div class="questions">
    
    <div class="question__container">
      <div class="question__header flex__align flex__align">
        <h3 class="heading__small color--green">
        What sets Dygranabis apart in the cannabis industry?  
        </h3>
        {
          open1? <svg
          onClick={()=>setOpen1(false)}
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 35602">
            <path
              id="Vector"
              d="M1.46289 1.22852H15.4629"
              stroke="#228B22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg> 
        :
         <svg
         onClick={()=>setOpen1(true)}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g id="Group 35621">
           <path
             id="Vector"
             d="M8.46289 1.22852V15.2285"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             id="Vector_2"
             d="M1.46289 8.22852H15.4629"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </g>
       </svg>
        }
        
      </div>

      <div class="answer">
        <p class={open1? "faq--answer" : "hide" }>
        Dygranabis stands out for its commitment to excellence, innovation, and a diverse range of premium cannabis products
        </p>
      </div>
    </div>
    <div class="question__container">
      <div class="question__header flex__align flex__align">
        <h3 class="heading__small color--green">
        How does Dygranabis ensure product quality?
        </h3>
        {
          open2? <svg
          onClick={()=>setOpen2(false)}
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 35602">
            <path
              id="Vector"
              d="M1.46289 1.22852H15.4629"
              stroke="#228B22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg> 
        :
         <svg
         onClick={()=>setOpen2(true)}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g id="Group 35621">
           <path
             id="Vector"
             d="M8.46289 1.22852V15.2285"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             id="Vector_2"
             d="M1.46289 8.22852H15.4629"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </g>
       </svg>
        }
        
      </div>

      <div class="answer">
        <p class={open2? "faq--answer" : "hide" }>
        We employ cutting-edge cultivation techniques, explore new strains, and prioritize precision to set the standard for quality and potency.
        </p>
      </div>
    </div>
    <div class="question__container">
      <div class="question__header flex__align flex__align">
        <h3 class="heading__small color--green">
        What is unique about Dygranabis Logistics?
        </h3>
        {
          open3? <svg
          onClick={()=>setOpen3(false)}
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 35602">
            <path
              id="Vector"
              d="M1.46289 1.22852H15.4629"
              stroke="#228B22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg> 
        :
         <svg
         onClick={()=>setOpen3(true)}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g id="Group 35621">
           <path
             id="Vector"
             d="M8.46289 1.22852V15.2285"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             id="Vector_2"
             d="M1.46289 8.22852H15.4629"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </g>
       </svg>
        }
        
      </div>

      <div class="answer">
        <p class={open3? "faq--answer" : "hide" }>
        Our logistics services prioritize efficiency, security, and timely deliveries, ensuring a seamless supply chain for cannabis products.
        </p>
      </div>
    </div>
    <div class="question__container">
      <div class="question__header flex__align flex__align">
        <h3 class="heading__small color--green">
        How does Dygranabis contribute to sustainability?  
        </h3>
        {
          open4? <svg
          onClick={()=>setOpen4(false)}
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 35602">
            <path
              id="Vector"
              d="M1.46289 1.22852H15.4629"
              stroke="#228B22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg> 
        :
         <svg
         onClick={()=>setOpen4(true)}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g id="Group 35621">
           <path
             id="Vector"
             d="M8.46289 1.22852V15.2285"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             id="Vector_2"
             d="M1.46289 8.22852H15.4629"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </g>
       </svg>
        }
        
      </div>

      <div class="answer">
        <p class={open4? "faq--answer" : "hide" }>
        We embrace sustainable practices in cultivation and packaging, reflecting our commitment to a greener, healthier future.
        </p>
      </div>
    </div>
    <div class="question__container">
      <div class="question__header flex__align flex__align">
        <h3 class="heading__small color--green">
        Can I track my cannabis shipment?   
        </h3>
        {
          open5? <svg
          onClick={()=>setOpen5(false)}
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 35602">
            <path
              id="Vector"
              d="M1.46289 1.22852H15.4629"
              stroke="#228B22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg> 
        :
         <svg
         onClick={()=>setOpen5(true)}
         width="17"
         height="17"
         viewBox="0 0 17 17"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g id="Group 35621">
           <path
             id="Vector"
             d="M8.46289 1.22852V15.2285"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             id="Vector_2"
             d="M1.46289 8.22852H15.4629"
             stroke="#170F49"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </g>
       </svg>
        }
        
      </div>

      <div class="answer">
        <p class={open5? "faq--answer" : "hide" }>
        Yes, Dygranabis provides accurate tracking throughout the transportation process, offering transparency and peace of mind.
        </p>
      </div>
    </div>
    
  </div>
</div>
</section>

<section class="blog__section">
     <div class="section--header">

       <h3 class="heading__tetiary-green align">BLOG</h3>
       <h2 class="heading__secondary align blog--header">In The News</h2>
     </div>

     <div class="blog__news grid--3col wrapper"> 
       {
         blog.map(blog => (  
         <div key={blog._id} class="news__card">
          
         <div class="news__img">
           <img src={blog.image} alt="flower" />
         </div>

         <div class="news__details">
           <div class="news__category flex__align">
             <span class="category">Category</span>
             <small class="news__date">{new Date(blog.createdAt).toDateString()}</small>
           </div>

           <p class="news__desc">
             {blog.subtitle}
           </p>

           <div class="posters__details flex__align">
             <div class="posters__profile">
               <svg
                 width="12"
                 height="12"
                 viewBox="0 0 12 12"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <g id="Element">
                   <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M6.00003 0C4.36633 0 3.04195 1.32437 3.04195 2.95807C3.04195 4.59176 4.36633 5.91613 6.00003 5.91613C7.63373 5.91613 8.9581 4.59176 8.9581 2.95807C8.9581 1.32437 7.63373 0 6.00003 0ZM4.01493 2.95807C4.01493 1.86173 4.90368 0.972974 6.00003 0.972974C7.09637 0.972974 7.98513 1.86173 7.98513 2.95807C7.98513 4.0544 7.09637 4.94316 6.00003 4.94316C4.90368 4.94316 4.01493 4.0544 4.01493 2.95807Z"
                     fill="#6D758F"
                   />
                   <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M6 7.03456C4.38098 7.03456 3.17815 7.38805 2.28912 7.91872C1.39971 8.44963 0.852791 9.14093 0.519596 9.77182C0.221386 10.3365 0.318935 10.9223 0.657378 11.3473C0.98291 11.7561 1.51278 12.0001 2.08158 12.0001H9.91842C10.4872 12.0001 11.0171 11.7561 11.3426 11.3473C11.681 10.9223 11.7786 10.3365 11.4804 9.77184C11.1472 9.14096 10.6003 8.44963 9.71088 7.91872C8.82185 7.38805 7.61903 7.03456 6 7.03456ZM1.37995 10.2262C1.64331 9.72755 2.07467 9.17987 2.78782 8.75418C3.50135 8.32826 4.52536 8.00753 6 8.00753C7.47464 8.00753 8.49865 8.32826 9.21218 8.75418C9.92533 9.17987 10.3567 9.72755 10.6201 10.2262C10.7274 10.4294 10.6932 10.6009 10.5815 10.7412C10.4568 10.8977 10.218 11.0271 9.91842 11.0271H2.08158C1.78197 11.0271 1.54316 10.8977 1.4185 10.7412C1.30676 10.6009 1.27262 10.4294 1.37995 10.2262Z"
                     fill="#6D758F"
                   />
                 </g>
               </svg>
             </div>

             <span class="posters__name">{blog.posterName}</span>
           </div>

           <Link to={`/blog/${blog._id}`} class="primary__btn news--btn green">Read More</Link>
         </div>
         
       </div>))
}
     </div>
   </section> 

    <section className="customers__review">
      <div className="customer__review--header flex__align wrapper">
        <div className="review__header">
          <h3 className="heading__tetiary color--green">Testimonial</h3>
          <h2 className="heading__secondary color--black">
            What Our Customer Says
          </h2>
        </div>

        {/* <div className="review__selection--btn">
          <button to="#" className="btn--backward">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
          </button>
          <button to="#" className="btn--forward">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M268 112l144 144-144 144M392 256H100"
              />
            </svg>
          </button>
        </div> */}
      </div>

      <div className="review__section grid--3col wrapper">
        <div className="review__card">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8667 0C15.3268 0 13.2638 1.99272 13.2638 4.4502C13.2638 6.90616 15.3268 8.90039 17.8667 8.90039C22.2303 8.90039 19.7017 16.6282 14.1983 17.4332C13.9386 17.4702 13.7016 17.5933 13.5302 17.7803C13.3588 17.9672 13.2643 18.2056 13.2638 18.4524C13.2638 19.0842 13.8652 19.5839 14.5313 19.4882C24.5341 18.0635 28.091 0.00151873 17.8667 0.00151873V0ZM4.6045 0C2.06135 0 0 1.9912 0 4.4502C0 6.90464 2.06135 8.89735 4.6045 8.89735C8.96648 8.89735 6.43789 16.6282 0.93448 17.4332C0.67509 17.4702 0.438323 17.5931 0.266948 17.7797C0.0955736 17.9663 0.000890117 18.2044 0 18.4508C0 19.0827 0.60143 19.5824 1.26591 19.4867C11.272 18.062 14.8288 0 4.6045 0Z"
              fill="#228B22"
            />
          </svg>

          <p className="comments">
          "Impressed by Dygranabis' top-notch quality! Their diverse cannabis selection exceeded my expectations. Definitely my go-to for premium products."
          </p>
          <div className="customer__profile--review flex__align">
            <div className="profile flex__align">
              <figure className="profile__img">
                <img src={customerRev1} alt="customer" />
              </figure>

              <div className="profile__details">
                <span className="profile--name">Mitchell Clark</span>
                <span className="profile--status">Customer</span>
              </div>
            </div>

            <div className="profile__review--stars">
              <svg
                width="15"
                height="15"
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
          </div>
        </div>

       
        <div className="review__card">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8667 0C15.3268 0 13.2638 1.99272 13.2638 4.4502C13.2638 6.90616 15.3268 8.90039 17.8667 8.90039C22.2303 8.90039 19.7017 16.6282 14.1983 17.4332C13.9386 17.4702 13.7016 17.5933 13.5302 17.7803C13.3588 17.9672 13.2643 18.2056 13.2638 18.4524C13.2638 19.0842 13.8652 19.5839 14.5313 19.4882C24.5341 18.0635 28.091 0.00151873 17.8667 0.00151873V0ZM4.6045 0C2.06135 0 0 1.9912 0 4.4502C0 6.90464 2.06135 8.89735 4.6045 8.89735C8.96648 8.89735 6.43789 16.6282 0.93448 17.4332C0.67509 17.4702 0.438323 17.5931 0.266948 17.7797C0.0955736 17.9663 0.000890117 18.2044 0 18.4508C0 19.0827 0.60143 19.5824 1.26591 19.4867C11.272 18.062 14.8288 0 4.6045 0Z"
              fill="#228B22"
            />
          </svg>

          <p className="comments">
          "Outstanding logistics service! Dygranabis ensured a smooth delivery, and the accurate tracking gave me confidence in the process. Highly recommend."
          </p>
          <div className="customer__profile--review flex__align">
            <div className="profile flex__align">
              <figure className="profile__img">
                <img src={customerRev2} alt="customer" />
              </figure>

              <div className="profile__details">
                <span className="profile--name">Daniel Russel</span>
                <span className="profile--status">Customer</span>
              </div>
            </div>

            <div className="profile__review--stars">
              <svg
                width="15"
                height="15"
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
          </div>
        </div>

       
        <div className="review__card">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8667 0C15.3268 0 13.2638 1.99272 13.2638 4.4502C13.2638 6.90616 15.3268 8.90039 17.8667 8.90039C22.2303 8.90039 19.7017 16.6282 14.1983 17.4332C13.9386 17.4702 13.7016 17.5933 13.5302 17.7803C13.3588 17.9672 13.2643 18.2056 13.2638 18.4524C13.2638 19.0842 13.8652 19.5839 14.5313 19.4882C24.5341 18.0635 28.091 0.00151873 17.8667 0.00151873V0ZM4.6045 0C2.06135 0 0 1.9912 0 4.4502C0 6.90464 2.06135 8.89735 4.6045 8.89735C8.96648 8.89735 6.43789 16.6282 0.93448 17.4332C0.67509 17.4702 0.438323 17.5931 0.266948 17.7797C0.0955736 17.9663 0.000890117 18.2044 0 18.4508C0 19.0827 0.60143 19.5824 1.26591 19.4867C11.272 18.062 14.8288 0 4.6045 0Z"
              fill="#228B22"
            />
          </svg>

          <p className="comments">
          "Dygranabis not only delivers exceptional products but also embraces sustainability. Love being part of a community that values both quality and the environment!"
          </p>
          <div className="customer__profile--review flex__align">
            <div className="profile flex__align">
              <figure className="profile__img">
                <img src={customerRev3} alt="customer" />
              </figure>

              <div className="profile__details">
                <span className="profile--name">Amy Walter</span>
                <span className="profile--status">Customer</span>
              </div>
            </div>

            <div className="profile__review--stars">
              <svg
                width="15"
                height="15"
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
                className="review--stars"
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
          </div>
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
  <Link to="#" class="primary__btn bg--white algin">Contact Us</Link>
</div>
</section>

    </>
  )
}

export default Home