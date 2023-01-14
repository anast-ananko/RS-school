import { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.scss";

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link_active" : "header__link"
        }
        to="/"
      >
        Garage
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link_active" : "header__link"
        }
        to="/winners"
      >
        Winners
      </NavLink>
    </div>
  );
};

export default Header;
