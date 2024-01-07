import React from 'react'
import './policy.css'
import { Helmet } from 'react-helmet-async'

export default function Policies() {
  return (
    <>
     <Helmet>
                <title>Policies</title>
            </Helmet>
    <div class="bg__green">
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Policies
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
    </div>

    <section class="policies__section">
      <div class="policys wrapper">
        <h3 class="heading__secondary mg heading--one"><b> Your privacy is important to us.</b></h3>
        <p class="para p--1">This privacy policy explains the personal data Zen Leaf Technologies, LLC (“Zen Leaf” or “we”) collects, uses, disclose and protect, and stores when an individual (“you”) uses our cannabis product ordering and delivery service (the “Service”) through our website Dygranabis.com (the “Website”), utilize our mobile application for delivery (the “App”), utilize our e-commerce platform (the “Platform”), or who engage in in-person transactions at a store (“In-Store”).</p>
        <p class="para p--1">The Service, Website, the App, and the Platform, and Shop are collectively referred to as the “Solution”.</p>
        <h6 class="heading__secondary mg"><b>Personal Information We Collect</b></h6>
        <p class="para p--1">
          We collect data from you through the Website, Platform and App and other interactions you have with us. You provide some of this information directly to us via the Website, Platform and App we get some of it by collecting data about your interactions, use, and experiences with the Solution. Personal information is data that can be used to identify or contact an individual person. Zen Leaf has collected the following categories of personal information from its users in the last twelve (12) months:
          Collect by the Service
        </p>


      </div>
    </section>


    <section class="contact__field">
      <h2 class="heading__secondary color--white align">
        Do you have more questions?
      </h2>
      <p class="contact__instruction align color--white">
        Lorem ipsum dolor sit samet, comsecteur <br />
        cindo ameit dolorem.
      </p>
      <div class="btn__container align">
        <a href="#" class="primary__btn bg--white algin">Contact Us</a>
      </div>
    </section>

    </>
  )
}
