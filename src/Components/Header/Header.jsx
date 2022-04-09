import logo from "./../../img/logo-ifood-256.png";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <header className="container-header">
      <figure>
        <img className="logo-img" src={logo} alt="logo" />
      </figure>
      <div className="box-input-header">
        <input type="search" placeholder="ex: X-salada" />
        <button>
          <BiSearchAlt2 />
        </button>
      </div>
    </header>
  );
};

export default Header;
