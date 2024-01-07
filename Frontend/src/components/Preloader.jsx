import React from "react";
import "./preloader.css";
import WeedImg from '../assets/logo/Dygranabis-Light-mode.png'

const PreLoader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
       <img src={WeedImg}  style={{width:"90px"}}/>
       <p className="loaderr">
  Loading
  <span class="loading-dots">.</span>
  <span class="loading-dots">.</span>
  <span class="loading-dots">.</span>
</p>
      </div>
    </div>
  );
};

export default PreLoader;