import "./Footer.css";
import frame1 from "../../assets/images/frame1.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";
import frame5 from "../../assets/images/frame5.svg";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <div className="ftr-main">
      <div className="ftr-section-4">
        <h4 className="ftr-left-ttl2">
          <span className="sub-name">Our Core Values</span>{" "}
          <span>
            Innovation guided by precision, automation, technology, and
            intelligence.
          </span>
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

      <Element name="footerSection" className="ftr-option">
        <div className="ftr-section">
          <div className="ftr-center">
            <h3>Precilo </h3>
          </div>
          <h1>Empowering MedTech.</h1>
          <div className="ftr-img">
            <img src={frame1} alt="image" className="ftr-img1" />
          </div>
          <div className="ftr-text-section">
            <span>Health and Care Always</span>
            <span>Contact Us : team@precilo.space</span>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Footer;
