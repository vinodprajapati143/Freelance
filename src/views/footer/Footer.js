import React from "react";
import "./Footer.css";
import footerimg from "../../assets/footerimg.svg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ftr_phones from "../../assets/ftr_phones.png";
import Applestore from "../../assets/Applestore.png";
import frame1 from "../../assets/images/frame1.svg";
import frame04 from "../../assets/images/frame04.svg"
import frame02 from "../../assets/images/frame02.svg";
import frame05 from "../../assets/images/frame05.svg";
import frame6 from "../../assets/images/frame6.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";
import frame5 from "../../assets/images/frame5.svg";

const Footer = () => {
  return (


    <div className="ftr-main">
      <div className="ftr-section-1">
        <div className="ftr-section-2">
          Supported & Sponsored By
        </div>
        <div className="ftr-section-3">
          <div className="ftr-section-revares1">
          <img src={frame04} alt="apple" />
          <img src={frame02} alt="apple" />
          </div>
          <div className="ftr-section-revares2">
          <img src={frame05} alt="apple" />
          <img src={frame6} alt="apple" />
          </div>
        </div>

      </div>
      <div className="ftr-section-4">
        <h4 className="ftr-left-ttl2">
          <span className="sub-name" >Our Core Values</span>  <span>Innovation guided by precision, automation, technology, and intelligence.</span>
        </h4>
        <div className="ftr-section-5">
          <div className="ftr-crad">
          <img src={frame5} alt="apple" className="apple" />
          <span>Precision</span>
          </div>
           <div className="ftr-crad">
          <img src={frame3} alt="apple" className="apple" />
          <span>Automation</span>
          </div>
           <div className="ftr-crad">
          <img src={frame4} alt="apple" className="apple" />
          <span>Technology</span>
          </div>
           <div className="ftr-crad">
          <img src={frame2} alt="apple" className="apple" />
          <span>Intelligence</span>
          </div>
        </div>

      </div>


      <div className="ftr-section">
        <div className="ftr-center">
          <h3>precilo health</h3>
          <span>AND technologies</span>
        </div>
        <h1>Empowering MedTech.</h1>
        <div className="ftr-img">
          <img src={frame1} alt="image" className="ftr-img1" />
        </div>
        <div className="ftr-text-section">
          <span>Precilo Health and Technology LLP</span>
          <span>Contact Us : team@precilo.space</span>
          <span>WhatsApp : +91 98994 83885</span>
        </div>
      </div>


      {/* <div className="ftr-left-mid">
        <div className="ftr-left">
          <div className="ftr-abt-ttl">
            <p className="ftr-left-ttl1">About</p>
            <h4 className="ftr-left-ttl2">
              Dentist  <span className="sub-name">India Plus</span>
            </h4>
          </div>
          <img src={footerimg} alt="image" className="ftr-img1" />
        </div>
        <div className="ftr-mdl">
          <p className="ftr-mdl-txt1">
            Dentist India Plus is one of the top most dentist brand in the country and serving in more than 60+ cities. Quality and high standards of treatment has been the motto from the inception and allowed the brand to become a household name !.
          </p>
          <div>
            <p className="ftr-avbl">Available Soon On</p>
            <div className="download-store">
              <img src={Applestore} alt="apple" className="apple" />
              <img src={play_store} alt="playstore" className="playstore" />
            </div>
          </div>
          <div className="ftr-links">
            <div className="ft-detail-link">
              <div>About Us </div>
              <div>Privacy Policy</div>
              <div>Terms of Conditions </div>
              <div>Help</div>
            </div>
            <hr className="hr-line" />
            <div className="ft-scl">
              <FaInstagram className="insta-logo" />
              <FiTwitter className="twtr-logo" />
              <FaFacebookF className="fcbk-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="ftr-right">
        <img src={ftr_phones} className="ftr-img2" />
      </div> */}

    </div>
  );
};

export default Footer;
