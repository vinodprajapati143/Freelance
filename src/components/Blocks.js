import React from "react";
import { GrTrophy } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";
import frame9 from "../../src/assets/images/frame9.svg"
import frame8 from "../assets/images/frame8.svg"
import frame01 from "../assets/images/frame01.svg"
import frame7 from  "../assets/images/frame7.svg"
import "./Blocks.css";

const RowWithBlocks = () => {
  const isMobile = window.innerWidth <= 767;

  const Icon1 = () => (
    <div className="trophy1">
      <img src={frame9} />
    </div>
  );
  const Icon2 = () => (
    <div className="trophy2">
      <img src={frame8} />
    </div>
  );
  const Icon3 = () => (
    <div className="trophy3">
      <img src={frame7} />
    </div>
  );
  const Icon4 = () => (
    <div className="trophy4">
      <img src={frame01} />
    </div>
  );

  const blocks = [
    {
      bgColor: "White",
      textColor: "#2B275A",
      icon: <img src={frame9} />,
      title: "Device Innovation",
      content:
        "Revolutionizing Healthcare with Cutting-Edge Medical Solutions",
    },
    {
      bgColor: "#2B275A",
      textColor: "white",
      icon: <img src={frame8} />,
      title: "MedTech Engineering",
      content:
        "Building Innovative Solutions for a Healthier Tomorrow",
    },
    {
      bgColor: "White",
      textColor: "#2B275A",
      icon: <img src={frame7} />,
      title: "Digital Health Software",
      content:
        "Transforming Patient Care through Intelligent Software Solutions",
    },
    {
      bgColor: "#FF902A",
      textColor: "white",
      icon: <img src={frame01} />,
      title: "AI- Assisted Diagnostics",
      content:
        "Empowering Physicians with Accurate and Timely Insights",
    },
  ];

  return (
    <div className="row">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="block"
          style={{ backgroundColor: block.bgColor, color: block.textColor }}
        >
          {block.icon}
          <div className="block-text-cnt">
            <h2 className="block-ttl1" >
              {block.title}
            </h2>
            <p className="block-cnt" >
              {block.content}
            </p>
          </div>
        </div>
        
      ))}

     
    </div>
    

    
  );
};

export default RowWithBlocks;
