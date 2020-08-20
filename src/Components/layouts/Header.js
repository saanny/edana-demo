import React from "react";
import sprite from "../../img/sprites.svg";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header className="header">
      <a href="#/" className="logo">
        <svg className="logo__icon">
          <use href={sprite + "#icon-company"} />
        </svg>
      </a>
      <div className="header__menu">
        <ul className="menu-list">
          {props.headerData.map((item, index) => {
            return (
              <li className="menu-list__item">
                <Link to={item.to} className="menu-list__link" key={index}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
