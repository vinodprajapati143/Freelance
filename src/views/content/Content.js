import "./Content.css";
import frame from "../../assets/images/frame.svg";
import RowWithBlocks from "../../components/Blocks";
import { Link } from "react-scroll";

const content = () => {
  return (
    <div className="cnt-main">
      <div className="cnt-left-main">
        <div className="cnt-left-section">
          <h2 className="cnt-txt1">
            <span>Empowering Health through</span>
            <span>Innovative Medical Devices</span>
            <span>and Med-Technologies</span>
          </h2>
          <Link
            to="footerSection"
            className="cnt-option"
            smooth={true}
            duration={500}
          >
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
