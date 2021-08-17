import PropTypes from "prop-types";
import { Link } from "react-router-dom";

window.onscroll = () => {
  const bottomMenu = document.querySelector("#bottom-menu");
  const { scrollY } = window;
  const h = document.body.offsetHeight;
  if (scrollY > h - window.innerHeight - 30) {
    bottomMenu.classList.add("hide");
  } else if (bottomMenu.classList.contains("hide")) {
    bottomMenu.classList.remove("hide");
  }
};

const BottomMenu = ({ menus }) => {
  const clickMenu = (e) => {
    const actived = document.querySelector('.menu-item.actived')
    if (actived !== null) {
      actived.classList.remove('actived')
    }
      e.target.parentElement.parentElement.classList.add('actived')
    }

  return (
    <div className="stick-content">
      <ul className="bottom-menu" id="bottom-menu">
        {menus.map((menu, i) => (
          <li className="menu-item" key={i}>
            <Link to={menu.href} title={menu.title} onClick={clickMenu}>
              <i className="material-icons">{menu.icon}</i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

BottomMenu.prototypes = {
  menus: PropTypes.array.isRequired,
};

export default BottomMenu;
