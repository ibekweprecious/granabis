import React from 'react'
import './success.css'

export default function Success() {
  return (
    
    <div className="custom-modal">
      <div className="succes succes-animation icon-top"><i className="fa fa-check"></i></div>
      <div className="succes border-bottom"></div>
      <div className="content">
        <p className="type">Success</p>
        <p className="message-type">Go back to home</p>
        <a className='type' href='/'>Home</a>
      </div>
    </div>
   
  )
}
