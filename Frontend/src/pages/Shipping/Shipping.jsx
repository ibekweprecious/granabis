import React from 'react'
import './shipping.css'
import '../Cart/Cart.css'
import { Link } from 'react-router-dom'

export default function Shipping() {
  return (
    <>
    <section className="bg__green">
      <svg width="1440" height="144" className="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 className="heading__secondary size--big about__header color--white align">
       Shipping
      </h2>

      <svg width="96" height="53" className="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
    </section>

    <section className="billing__information">
      <div className="information__container wrapper">
        <h3 className="heading__tetiary">Billing Information</h3>
   
        <form action="" className="information__form">
          <fieldset className="details__fieldset flex__align">
            <fieldset className="username flex__column mg-top">
              <label for="first-name">First Name</label>
              <input type="text" name="user--name" id="user--name" placeholder="Your First name" required/>

            </fieldset>

            <fieldset className="username flex__column mg-top">

              <label for="last-name">Last Name</label>
              <input type="text" name="username" id="user-name" placeholder="Your last name" required/>
            </fieldset>

          </fieldset>


          <fieldset className="username flex__column">

            <label for="street--address">Street Address</label>
            <input type="text" name="street-address" id="street--address" placeholder="e.g no.86 London villa" required/>
          </fieldset>

          <fieldset className="username flex__column">

            <label for="Company--name" className="mg-top">Company Name <small>(optional)</small></label>
            <input type="text" name="company-name" id="company-name" placeholder="Company name"/>
          </fieldset>


         
<label style={{marginTop:"30px"}} for="street--address">Select Country</label>
<details class="custom-select">
  <summary class="radios">
    <input type="radio" name="item" id="default" title="USA" checked/>
    <input type="radio" name="item" id="item1" title="UK"/>
    <input type="radio" name="item" id="item2" title="FRANCE"/>
    <input type="radio" name="item" id="item3" title="AUSTRALIA"/>
    <input type="radio" name="item" id="item4" title="BRAZIL"/>
    <input type="radio" name="item" id="item5" title="CANADA"/>
  </summary>
  <ul class="list">
    <li>
      <label for="item1">
       USA
        <span></span>
      </label>
    </li>
    <li>
      <label for="item2">UK</label>
    </li>
    <li>
      <label for="item3">FRANCE</label>
    </li>
    <li>
      <label for="item4">AUSTRALIA</label>
    </li>
    <li>
      <label for="item5">BRAZIL</label>
    </li>
    <li>
      <label for="item5">CANADA</label>
    </li>
  </ul>
</details>


          <fieldset className="details__fieldset flex__align">
            <fieldset className="username flex__column">
              <label for="user--email">Email</label>
              <input type="text" name="user--email" id="user--email" placeholder="Email" required/>

            </fieldset>


          </fieldset>
          

          <input type="checkbox" id="accept--terms" name="accept--terms" required value="Accept all terms and Conditions"/>
        <label for="terms__condition" className="terms" >
          Ship to a different address
        </label>

        <hr/>
         
        <h3 className="heading__tetiary">Additional Info</h3>
         
        <fieldset className="username flex__column">
         <label for="Company--name">Order Notes <small>(Optional)</small></label>

          <textarea name="subject" id="subject" cols="30" rows="7" placeholder="Notes about your order, e.g. special notes for delivery" required></textarea>
         
        </fieldset>

        
        </form>

      <Link to={"/payment"} style={{backgroundColor:"green", marginTop:"10px", color:"#fff"}} className='primary__btn algin'><span class="cart--text">Payment</span></Link>
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
        <a href="#" class="primary__btn bg--white algin">Contact Us</a>
      </div>
    </section>

    </>
    
  )
}
