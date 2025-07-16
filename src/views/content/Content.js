import React from "react";
import "./Content.css";
import smartphone3 from "../../assets/smartphone3.png";
import frame from "../../assets/images/frame.svg"
import RowWithBlocks from "../../components/Blocks";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";
import { RiAwardFill } from "react-icons/ri";
import { LuFlower2 } from "react-icons/lu";
import { IoMdTrophy } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-scroll';


const content = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="cnt-main">
      <div className="cnt-left-main">
        <div className="cnt-left-section">
          <h2 className="cnt-txt1">
            <span>Empowering Health through</span>
            <span>Innovative Medical Devices</span>
            <span>and Med-Technologies</span>
          </h2>
          <Link to="footerSection" smooth={true} duration={500}>
          
          <div className="text_name">
            <span>Get in Touch</span>
          </div>
          </Link>

        </div>
        <div className="cnt-right">
          <img src={frame} alt="consultant" className="cnt-img" />
        </div>
      </div>
      
      <RowWithBlocks />
    </div>
  );
};

export default content;
