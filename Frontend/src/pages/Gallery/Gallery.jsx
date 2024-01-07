import React from 'react' 
import './gallery.css'
import GalleryImg1 from '../../assets/img/marijuana-dispensary-products-illustration-1200x630-1085450290.jpg'
import GalleryImg2 from '../../assets/img/california-medical-marijuana.jpg'
import GalleryImg3 from '../../assets/img/mgn-medical-marijuana-1024x768.jpg'
import GalleryImg4 from '../../assets/img/1140-med-marijuana-caduceus.jpg'
import GalleryImg5 from '../../assets/img/Hemp.jpg'
import GalleryImg6 from '../../assets/img/o-MEDICAL-MARIJUANA-facebook.jpg'
import GalleryImg7 from '../../assets/img/Rectangle19375(3).png'
import GalleryImg8 from '../../assets/img/Blog_science-of-marijuana.jpg'
import GalleryImg9 from '../../assets/img/why-doctors-know-almost-nothing-about-health-effects-marijuana-1135399261_0.jpg'
import GalleryImg10 from '../../assets/img/3711e72b-c694-4ece-a82a-8feb88a46554.jpeg'
import GalleryImg11 from '../../assets/img/doctor-hand-hold-offer-patient-medical-marijuana-oil_1150-16910.jpg'
import GalleryImg12 from '../../assets/img/Marijuana_social_e5428a92-34fd-4fc5-a6b8-9e1581429bee-prv.jpg'
import GalleryImg13 from '../../assets/img/Does-Vaping-Weed-Smell.jpg'
import GalleryImg14 from '../../assets/img/140306105136-01-uses-for-medical-marijuana.jpg'
import GalleryImg15 from '../../assets/img/Blog_does-weed-interact-with-any-medications-scaled.jpeg'
import GalleryImg16 from '../../assets/img/Blog_does-weed-interact-with-any-medications-scaled.jpeg'
import { Helmet } from 'react-helmet-async'

export default function Gallery() {
  return (
  <>
   <Helmet>
                <title>Gallery</title>
            </Helmet>
      <section class="bg__green">
      <svg width="1440" height="144" class="frame" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999329 1.6665C914.297 306.516 869.746 -30.974 1440 143.006" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        
        
      <h2 class="heading__secondary size--big about__header color--white align">
        Check our works
      </h2>

      <svg width="96" height="53" class="ellipse" viewBox="0 0 96 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse 1251" d="M94.3596 26.5822C94.3596 33.2794 89.4379 39.5555 81.0114 44.2149C72.6198 48.855 60.9589 51.7562 48.024 51.7562C35.0892 51.7562 23.4283 48.855 15.0366 44.2149C6.61012 39.5555 1.68848 33.2794 1.68848 26.5822C1.68848 19.8849 6.61012 13.6089 15.0366 8.94951C23.4283 4.30938 35.0892 1.4082 48.024 1.4082C60.9589 1.4082 72.6198 4.30938 81.0114 8.94951C89.4379 13.6089 94.3596 19.8849 94.3596 26.5822Z" stroke="#D9D9D9" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
    </section>

    <section class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src={GalleryImg1} alt="Gallery image 1" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src={GalleryImg2} alt="Gallery image 2" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src={GalleryImg3} alt="Gallery image 3" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src={GalleryImg4} alt="Gallery image 4" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src={GalleryImg5} alt="Gallery image 5" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallero-MEDICAL-MARIJUANA-facebook.jpgy__item--6">
        <img src={GalleryImg6} alt="Gallery image 6" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src={GalleryImg7} class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src={GalleryImg8} alt="Gallery image 8" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src={GalleryImg9} alt="Gallery image 9" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--10">
        <img
          src={GalleryImg10}
          alt="Gallery image 10"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--11">
        <img
          src={GalleryImg11}
          alt="Gallery image 11"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--12">
        <img
         src={GalleryImg12}
          alt="Gallery image 12"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--13">
        <img
        src={GalleryImg13}
          alt="Gallery image 13"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--14">
        <img
          src={GalleryImg14}
          alt="Gallery image 14"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--15">
        <img
         src={GalleryImg15}
          alt="Gallery image 15"
          class="gallery__img"
        />
      </figure>
      <figure class="gallery__item gallery__item--16">
        <img
         src={GalleryImg16}
          alt="Gallery image 16"
          class="gallery__img"
        />
      </figure>
    
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
