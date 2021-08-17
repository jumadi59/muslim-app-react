import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({menus}) => {
  return (
    <footer>
      <div className="bottom-links">
        <ul>
        {menus.map((menu, i) => (
          <li className="nav-link" key={i}>
            <Link to={menu.href} title={menu.title}>
              {menu.title}
            </Link>
          </li>
        ))}
        </ul>
        <p>copyright © 2021 – Muslim Apps</p>
      </div>
      <div className="find-on">
        <p>Temukan kami di:</p>
        <ul>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.jumbox.app.muslim" target="_blank" rel="noreferrer">
              <img height={50} src="google-play-badge.png" alt="Download Now" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.prototypes = {
    menus: PropTypes.array.isRequired,
  };

export default Footer;
