import React from 'react'

function Footer() {
  return (
    <>
     <footer className="footer">
      <div className="footer__container grid--3col wrapper">
        <div className="footer__details">
          <h2 className="heading__secondary size--big color--green">Dygranabis</h2>
          <p className="footer__description">
          At Dygranabis, we lead with innovation, sustainability, and a wellness focus in the cannabis industry. Our commitment to excellence is evident in the cultivation of top-tier products and the development of unique strains, setting new standards for quality and diversity.
          </p>

          <div className="footer__call--contact flex__align">
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M21.25 0.25C9.53275 0.25 0 9.78275 0 21.5V30.3039C0 32.4799 1.90612 34.25 4.25 34.25H6.375C6.93859 34.25 7.47909 34.0261 7.8776 33.6276C8.27612 33.2291 8.5 32.6886 8.5 32.125V21.1961C8.5 20.6325 8.27612 20.092 7.8776 19.6935C7.47909 19.295 6.93859 19.0711 6.375 19.0711H4.4455C5.627 10.8474 12.7032 4.5 21.25 4.5C29.7967 4.5 36.873 10.8474 38.0545 19.0711H36.125C35.5614 19.0711 35.0209 19.295 34.6224 19.6935C34.2239 20.092 34 20.6325 34 21.1961V34.25C34 36.5939 32.0939 38.5 29.75 38.5H25.5V36.375H17V42.75H29.75C34.4378 42.75 38.25 38.9378 38.25 34.25C40.5939 34.25 42.5 32.4799 42.5 30.3039V21.5C42.5 9.78275 32.9673 0.25 21.25 0.25Z"
                fill="black"
              />
            </svg>

            <div className="call--details">
              <span className="call--header">Got Question? Call center</span>
              <div className="call--numbers">
                <span className="no--1 c-number">+234 700 674 2588</span>
                <span className="no--2 c-number">+234 903 000 9438</span>
              </div>
            </div>
          </div>

          <div className="footer__policies">
            <div className="private--policies">
              <a href="policy" className="privacy policy">Privacy Policy</a>
              <a href="privacy" className="terms--condition policy"
                >Terms and Conditions</a
              >
            </div>
            <a href="privacy" className="whistle--blower policy">Whistleblower Policy</a>
          </div>
        </div>

        <div className="footer__nav--links">
          <div className="quick_links">
            <h2 className="heading__secondary--sm">Quick Links</h2>
            <a href="home.html" className="footer__link">Home</a>
            <a href="about.html" className="footer__link">About us</a>
            <a href="products.html" className="footer__link">Products</a>
            <a href="about.html" className="footer__link">Gallery</a>
            <a href="invetment.html" className="footer__link">Investments</a>
            <a href="#faq" className="footer__link">FAQs</a>
            <a href="contact.html" className="footer__link">Contact us</a>
          </div>

          <div className="resource_links">
            <h2 className="heading__secondary--sm">Resources</h2>
            <a href="blog.html" className="footer__link">Blog/Learn</a>
            <a href="blog.html" className="footer__link">Articles</a>
            <a href="products.html" className="footer__link">Research</a>
          </div>
        </div>

        <div className="footer__contact--links">
          <h2 className="heading__secondary--sm">Subscribe to our newsletter</h2>
          <form action="" className="footer__form">
            <fieldset className="footer__input flex__align">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address..."
              />
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
            </fieldset>
          </form>

          <div className="footer__socials flex__align">
            <a href="#" className="instagram socials"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon icons"
                viewBox="0 0 512 512"
              >
                <title>Logo Instagram</title>
                <path
                  d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                />
                <path
                  d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                /></svg></a>
            <a href="#" className="facebook socials"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon icons"
                viewBox="0 0 512 512"
              >
                <title>Logo Facebook</title>
                <path
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  fill-rule="evenodd"
                /></svg></a>
            <a href="#" className="linkendin socials"><svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon icons"
                viewBox="0 0 512 512"
              >
                <title>Logo Linkedin</title>
                <path
                  d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                /></svg></a>
            <a href="#" className="twitter socials"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon icons"
                viewBox="0 0 512 512"
              >
                <title>Logo Twitter</title>
                <path
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                /></svg ></a>
          </div>
        </div>
      </div>
    </footer>
    <div className="copywrite">
      <span className="">cOPYRIGHT 2023 Dygranabis  Authority. All Rights Reserved</span>
    </div></>
  )
}

export default Footer