import React from 'react'
import './success.css'
import { Helmet } from 'react-helmet-async'

export default function Success() {
  return (
    
    <div className="custom-modal">
      <Helmet>
                <title>Success</title>
            </Helmet>
      <div className="succes succes-animation icon-top"><i className="fa fa-check"></i></div>
      <div className="succes border-bottom"></div>
      <div className="content">
      <p className="type">Successful</p>
        <p className="message-type">Go back to home</p>
        <a className='type' href='/home'>Home</a>
      </div>
    </div>
   
  )
}
