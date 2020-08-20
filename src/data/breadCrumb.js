import React from "react";
import sprite from "../img/sprites.svg";
export const breadCrumbData = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg className="breadcrumb__icon-home">
        <use href={sprite + "#icon-home"} />
      </svg>
    )
  },
  { to: "/", label: "Organisation Group" },
  { to: "/", label: "Admin Organisation Group(do not edit)" },
  { to: "/", label: "Organisation Structures" },
  { to: "/", label: "Admin Org Structure(Do not edit)" },
  { to: "/", label: "Details" }
];
