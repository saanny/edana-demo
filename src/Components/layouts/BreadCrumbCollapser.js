import React from "react";
import sprite from "../../img/sprites.svg";

const BreadCrumbCollapser = props => (
  <li className="breadcrumb__collapser" {...props}>
    <svg className="breadcrumb__icon-collapser">
      <use href={sprite + "#icon-more"} />
    </svg>
  </li>
);

export default BreadCrumbCollapser;
