import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMap,
  faCalendar,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./NavBar.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const NavBar = () => {
  return (
    <div className="giving-position">
      <div className="above-nav display-flex justify-content-space-between container">
        <div className="display-flex">
          <div className="display-flex align-item-center margin-right-10">
            <FontAwesomeIcon
              className="color-orange margin-y-10"
              icon={faEnvelope}
            />
            <p className="margin-zero">
              <a
                className="color-light-gray text-decoration-none"
                href="mailto:info@company.com"
              >
                info@company.com
              </a>
            </p>
          </div>

          <span className="styling-span"></span>

          <div className="display-flex align-item-center margin-left-10">
            <FontAwesomeIcon
              className="color-orange margin-y-10"
              icon={faMap}
            />
            <p className="color-light-gray margin-zero">
              Sunny Isles Beach,Fl 33190
            </p>
          </div>
        </div>

        <ul className="display-flex align-item-center list-style-none justify-content-space-between padding-zero">
          <li>
            <a className="icon" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a className="icon" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a className="icon" href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="icon" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>

      <div className="border"></div>

      <nav className="display-flex align-item-center justify-content-space-between navBar container">
        <h1 className="logo">VILLA</h1>

        <ul className="navbar-ul list-style-none display-flex align-item-center margin-zero">
          <li>
            <a className="text-decoration-none" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              Properties
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              Property Detail
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="#">
              Contact Us
            </a>
          </li>
          <ButtonComponent text={"Schedual a Vist"} active={true} />
        </ul>
        <a href="#" className="nav-toggler">
          <FontAwesomeIcon
            className=" color-gray nav-toggler-icon"
            icon={faBars}
          />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
