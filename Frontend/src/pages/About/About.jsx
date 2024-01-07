import React from 'react'
import './about.css'
import AboutImg from '../../assets/img/Blog_What-are-cannabis-topicals-1-1-scaled.jpg'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
<>
<Helmet>
                <title>About</title>
            </Helmet>
<div class="bg__green">
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Who We Are
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
    </div>


<section class="about__us--page">
      <div class="about__us flex__align about__page wrapper">
        <div class="description__img">
          <img
            src={AboutImg}
            alt=""
          />
        </div>

        <div class="discription__text about__us--text">
          <h4 class="heading__tetiary color--green">
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
            ABOUT US
          </h4>

          <p class="about__desc desc">
          Founded on a commitment to excellence, Dygranabis stands as a beacon of innovation in the cannabis landscape. Our expertise extends from cutting-edge cultivation methods to the development of unique strains, ensuring each product represents the pinnacle of quality. Embracing sustainability, we prioritize a greener, healthier future. Join us on a journey where premium cannabis meets integrity and innovation, shaping a distinctive narrative in the evolving cannabis industry.
            
          </p>
        </div>
      </div>

      <div class="paragraph__container align">
        <p class="about_paragraph align">
          <q>

          "At Dygranabis, we believe in the transformative power of premium cannabis for holistic wellness. Each meticulously cultivated bud reflects our commitment to cultivating not just a product but a path to a healthier, greener lifestyle. As pioneers in the industry, we embrace the synergy between cannabis and well-being, crafting a narrative that transcends the ordinary. Join us on this journey, where the essence of Dygranabis lies in fostering a balanced and healthier way of life through the therapeutic potential of premium cannabis."
          </q>
        </p>
      </div>
    </section>

    <div class="bg__nuetral"></div>

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
