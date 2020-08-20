import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Link, useParams, NavLink, Switch, Route } from "react-router-dom";
import sprite from "../../img/sprites.svg";
import { treeData } from "../../data/tree";

export default function Content(props) {
  return (
    <>
      <main className="content-wrapper">
        <BreadCrumb>
          {props.breadCrumbData.map(({ to, label, icon }) => (
            <Link key={to} to={to} className="breadcrumb__link">
              {icon && icon}
              {label}
            </Link>
          ))}
        </BreadCrumb>
        <div className="content">
          <div className="content-headline">
            <h2 className="content-headline__title">{props.headLine}</h2>
            <svg className="content-headline__icon">
              <use href={sprite + "#icon-visible"} />
            </svg>
          </div>

          <div className="main-content-wrapper">
            <div className="content-sidebar">
              <ul className="content-sidebar__list">
                {props.routes.map((route, index) => {
                  return (
                    <li className="content-sidebar__list-item" key={index}>
                      <NavLink exact to={route.path} className="content-sidebar__list-link">
                        {route.label}
                        <svg className="content-sidebar__list-icon">
                          <use href={sprite + "#icon-less_than"} />
                        </svg>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="main-content-cm">
              <Switch>
                {props.routes.map((route, index) => (
                  <Route key={index} {...route} />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
