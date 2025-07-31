import "./Header.css";
import precilo from "../../assets/images/precilo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="hd-main">
      <img src={precilo} alt="hfavire" className="logo" />
      <Link to="footerSection" smooth={true} duration={500}>
        <div className="text-name cursor-pointer">
          <span>Get in Touch</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
