import React from "react";
import Footer from "./Footer";
import sprite from "../../img/sprites.svg";
import { Link } from "react-router-dom";
export default function Sidebar({ title, ...props }) {
  return (
    <div className="side">
      <div className="sidebar">
        <h2 className="sidebar__title">
          {title}
          <svg className="sidebar__title-icon">
            <use href={sprite + "#icon-less_than"} />
          </svg>
        </h2>
        <div className="sidebar__menu">
          <ul className="sidebar__list">
            {props.sidebarData.map((route, index) => {
              return (
                <li className="sidebar-list__item" key={index}>
                  <Link to={route.to} className="sidebar-list__link">
                    <svg className="sidebar-list__icon">
                      <use href={sprite + "#icon-layers"} />
                    </svg>
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
