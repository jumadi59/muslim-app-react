import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TobBar = ({ menus }) => {
  const clickMenu = (e) => {
  const actived = document.querySelector('.nav-item.actived')
  if (actived !== null) {
    actived.classList.remove('actived')
  }
    e.target.parentElement.classList.add('actived')
  }
  return (
    <div className="nav-wrapper">
      <nav className="navbar container">
        <Link to="/" className="logo-brand">Muslim Apps</Link>
        <ul>
          {menus.map((menu, i) => (
            <li className="nav-item" key={i}>
              <Link to={menu.href} title={menu.title} onClick={clickMenu}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

TobBar.prototypes = {
  menus: PropTypes.array.isRequired,
};

export default TobBar;
