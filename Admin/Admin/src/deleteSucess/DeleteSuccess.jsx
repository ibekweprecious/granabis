import React from 'react'
import './delete.css'

export default function DeleteSuccess() {
  return (
    
    <div className="custom-modal">
      <div className="success succes-animation icon-top"><i className="fa fa-check"></i></div>
      <div className="success border-bottom"></div>
      <div className="content">
        <p className="type">Deleted</p>
        <p className="message-type">Go back to home</p>
        <a className='type' href='/home'>Home</a>
      </div>
    </div>
   
  )
}
